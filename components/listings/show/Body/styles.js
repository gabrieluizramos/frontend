import styled from 'styled-components'
import theme from 'config/theme'
import Row from '@emcasa/ui-dom/components/Row'
import Col from '@emcasa/ui-dom/components/Col'
import Text from '@emcasa/ui-dom/components/Text'
import View from '@emcasa/ui-dom/components/View'
import {breakpoint} from '@emcasa/ui/lib/styles'

export const LISTING_DETAILS_MAX_WIDTH = 1174

export const Container = styled(Row)`
  width: 100%;
  max-width: ${LISTING_DETAILS_MAX_WIDTH}px;
  flex-direction: column;
  padding: 0 ${theme.space[4]}px;

  @media screen and ${breakpoint.up('desktop')} {
    flex-direction: row;
  }
`

export const ListingDescription = styled(Col)`
  flex: 1 1 100%;

  ${Text} {
    margin: 0 0 ${theme.space[5]}px;
  }
`

export const SubTitleText = Text.withComponent('h3')
export const SubTitle = styled(SubTitleText)`
  margin: 0 0 ${theme.space[5]}px;
`
