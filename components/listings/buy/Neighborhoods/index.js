import {Component} from 'react'
import Link from 'next/link'
import {LazyImage} from 'react-lazy-images'
import Text from '@emcasa/ui-dom/components/Text'
import {Query} from 'react-apollo'
import slug from 'slug'
import {GET_DISTRICTS} from 'graphql/listings/queries'
import {
  Container,
  Header,
  Cities,
  City,
  NeighborhoodsLinks,
  NeighborhoodsHighlights,
  Neighborhood,
  Soon,
  Title,
  SubTitle,
  ListTitle
} from './styles'
import {
  log,
  BUYER_LANDING_NEIGHBORHOOD_IMAGE,
  BUYER_LANDING_NEIGHBORHOOD_LINK
} from 'lib/logging'

const RJ_SLUG = 'rio-de-janeiro'
const SP_SLUG = 'sao-paulo'

const CITIES = [
  {title: 'Bairros no Rio de Janeiro', slug: RJ_SLUG, stateSlug: 'rj'},
  {title: 'Bairros em São Paulo', slug: SP_SLUG, stateSlug: 'sp'}
]

const NEIGHBORHOODS = [
  {name: 'Copacabana', thumb: 'copacabana', city: RJ_SLUG},
  {name: 'Ipanema', thumb: 'ipanema', city: RJ_SLUG},
  {name: 'Leblon', thumb: 'leblon', city: RJ_SLUG},
  {name: 'Perdizes', thumb: 'perdizes', city: SP_SLUG},
  {name: 'Vila Pompéia', thumb: 'vila-pompeia', city: SP_SLUG},
  {name: 'Pinheiros', thumb: 'pinheiros', soon: true, city: SP_SLUG}
]

const NEIGHBORHOODS_BY_CITIES = NEIGHBORHOODS.reduce((cities, neighborhood) => {
  if (!cities[neighborhood.city]) {
    cities[neighborhood.city] = []
  }
  cities[neighborhood.city].push(neighborhood)
  return cities
}, {})

const getCityNeighborhoodLinks = (citySlug) => (
  <NeighborhoodsLinks>
    <Query query={GET_DISTRICTS}>
      {({data: {districts}, loading}) =>
        loading ? (
          <div />
        ) : (
          districts.filter(d => d.citySlug === citySlug && !NEIGHBORHOODS.find(n => d.name === n.name)).map((district) => {
            const url = `/imoveis/${district.stateSlug}/${district.citySlug}/${slug(
              district.nameSlug.toLowerCase()
            )}`
            return (
              <Link
                passHref
                key={district.nameSlug}
                href={{
                  pathname: url,
                  asPath: url
                }}
              >
                <a className="NeighborhoodLink" title={`Comprar imóvel: ${district.name}`} onClick={() => {
                  log(BUYER_LANDING_NEIGHBORHOOD_LINK, {neighborhood: district.nameSlug})
                }}>
                  <ListTitle color="inherit" fontWeight="normal">
                    {district.name}
                  </ListTitle>
                </a>
              </Link>
            )
          })
        )
      }
    </Query>
  </NeighborhoodsLinks>
)

export default class Neighborhoods extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title fontSize="xlarge" fontWeight="bold" textAlign="center">
            Imóveis à venda no Rio de Janeiro e São Paulo
          </Title>
          <Text color="grey" textAlign="center">
            Escolha a localidade e confira os imóveis disponíveis
          </Text>
        </Header>
        <Cities>
          {CITIES.map(({title, slug: citySlug, stateSlug}, index) => {
            return (
              <City key={index}>
                <SubTitle fontWeight="bold">
                  {title}
                </SubTitle>
                <NeighborhoodsHighlights>
                  {NEIGHBORHOODS_BY_CITIES[citySlug].map((props, nIndex) => {
                    const {name, thumb, soon} = props
                    const srcImg = `https://res.cloudinary.com/emcasa/image/upload/v1543531007/bairros/${thumb + (soon ? '-em-breve' : '')}`
                    return (
                      <Link
                        key={`link-${nIndex}`}
                        passHref
                        href={soon ? '#' : `/imoveis/${stateSlug}/${citySlug}/${thumb}`}
                      >
                        <Neighborhood
                          onClick={() => {
                            log(BUYER_LANDING_NEIGHBORHOOD_IMAGE, {neighborhood: name})
                          }}
                        >
                          <LazyImage
                            src={srcImg}
                            alt={`Imagem em destaque do bairro ${name}`}
                            placeholder={({ imageProps, ref }) => (
                              <div ref={ref} />
                            )}
                            actual={({ imageProps }) => <img {...imageProps} />}
                          />
                          <ListTitle fontWeight="normal">
                            {name}
                          </ListTitle>
                          {soon && <Soon>Em breve</Soon>}
                        </Neighborhood>
                      </Link>
                    )
                  })}
                </NeighborhoodsHighlights>
                {getCityNeighborhoodLinks(citySlug)}
              </City>
            )})}
        </Cities>
      </Container>
    )
  }
}
