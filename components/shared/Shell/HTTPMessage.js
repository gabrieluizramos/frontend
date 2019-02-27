import {Component} from 'react'
import Link from 'next/link'
import theme from '@emcasa/ui'
import Text from '@emcasa/ui-dom/components/Text'
import View from '@emcasa/ui-dom/components/View'
import Row from '@emcasa/ui-dom/components/Row'
import Col from '@emcasa/ui-dom/components/Col'
import Button from '@emcasa/ui-dom/components/Button'
import NextHead from 'components/shared/NextHead'
import {imageUrl} from 'utils/image_url'

const HTTPMessageSvgWidth = 723
const HTTPMessageSvgHeight = 281

const Asset = Row.extend`
  position: relative;
  height: 25vmin;
  width: 100%;
  margin: 8vmin 0

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
    max-width: ${HTTPMessageSvgWidth}px;
  }
`

export default class HTTPMessage extends Component {
  get title() {
    const {statusCode} = this.props

    switch (statusCode) {
      case 404:
        return 'Opssss… Não encontramos a página'
      default:
        return 'Opssss… Ocorreu um erro'
    }
  }

  get message() {
    const {statusCode} = this.props

    switch (statusCode) {
      case 404:
        return 'Desculpe, não encontramos a página. Ela pode ter sido deletada, não existir ou ser um link quebrado. Não se preocupe, você pode ir para a nossa página inicial ou explorar imóveis.'
      default:
        return 'Não se preocupe, você pode ir para a nossa página inicial ou explorar imóveis.'
    }
  }

  get button() {
    const {statusCode} = this.props

    switch (statusCode) {
      case 404:
        return 'Ir para página inicial'
      default:
        return 'Ir para página inicial'
    }
  }

  get href() {
    switch (this.props.statusCode) {
      case 404:
        return '/'
      default:
        return '/'
    }
  }

  get asset() {
    const {statusCode} = this.props

    switch (statusCode) {
      case 404:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${HTTPMessageSvgWidth} ${HTTPMessageSvgHeight}`}
          >
            <path fill="#1FB6FF" fillOpacity=".7" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M722 96.2844011c0 50.2456649-70.445495 38.0872179-74.120539 72.6029559-3.421001 32.081651 45.288351 30.53144 52.181848 53.522519 12.782836 42.621369-65.04536 53.34266-86.918824 55.059026-56.876498 4.467347-106.910994 2.428948-150.575529-1.536507-13.847071-.993505-58.939741-.08736-60.702595-14.868318-2.135336-17.836843 24.573531-11.918636 25.423203-23.789309 1.064235-14.864892-43.463703-14.880309-67.07599-13.679538-44.637794 2.264507-72.304473-.191849-114.906489 2.783528-22.364385.986653-93.717913 3.960316-92.653678-27.758191.331286-9.955606 17.889448-14.378417 19.169963-21.805724 3.019338-17.504533-52.185281-16.843338-66.032352-15.86011-36.2114565 1.985297-100.36423258-3.71708-104.36712962-31.711656C-4.6116378 87.0465164 55.7356397 82.9200443 75.9698379 81.931678c45.7912881 0 89.4592561.0119906 136.3199291-3.9654558 10.443235-.8873028 21.301866-.2672186 19.171679-12.161873-2.130186-7.9257727-17.041493-10.9011493-18.105728-18.8320608-4.260373-32.70687369 112.489646-37.58875229 173.59562-31.97373543 65.41441 6.00385421 101.893642 9.17450593 75.2706 35.93919123C440.351907 72.9250402 722 39.0482286 722 96.2844011"/>
            <path fill="#1FB6FF" fillOpacity=".7" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M381.999091 258.365517c-.108652-13.461764-25.193775-16.723706-45.566099-12.837321-20.372325 3.886386-12.449188 28.036142 15.279243 27.461723 27.73013-.574419 30.344578-7.474349 30.286856-14.624402M710.999367 172.363807c-.074519-13.460026-17.238085-16.721964-31.176551-12.835583-13.938466 3.886382-8.519396 28.036114 10.453416 27.461695 18.974545-.574418 20.762994-7.474342 20.723135-14.626112M197.998972 42.3638068c-.124229-13.4600255-28.729716-16.7219642-51.960566-12.8355824-23.23085 3.8863818-14.200081 28.0361134 17.421412 27.4616948 31.62322-.5744186 34.604719-7.4743419 34.539154-14.6261124"/>
            <path fill="#000" fillOpacity=".2" d="M310.7748 148.9897c-1.512-.253-3.543 1.797-3.468.265.187-3.819 2.557-3.14 4.249-6.569 1.694-3.43 1.348-3.6 3.041-7.031 1.694-3.431.606-3.968 2.299-7.398.996-2.021 1.729-3.814.303-5.591-1.113-1.389-3.316-1.944-5.504-2.913-1.739-.771-3.435-2.546-5.656-2.917-2.531-.424-5.131.489-7.485.651-2.67.185-5.179.355-7.256 1.199-2.642 1.074-4.229 2.881-5.195 4.837-1.691 3.429-1.794 3.378-3.485 6.807-1.693 3.43-1.141 3.702-2.833 7.133-1.694 3.43-.563 5.205-3.943 6.999-3.249 1.723-4.063-.33-7.691-.938-3.631-.607-3.33-2.404-6.961-3.011-3.633-.609-3.71-.147-7.343-.754-3.633-.608-4.285 1.411-7.603-.188 1.926-1.358 3.676-3.784 5.542-5.095 1.925-1.353 4.559-1.633 6.434-2.947 1.92-1.346 2.955-3.904 4.834-5.219 1.916-1.338 4.357-1.884 6.243-3.201 1.909-1.332 4.111-2.219 6.005-3.539 1.901-1.324 2.938-3.883 4.838-5.207 1.893-1.318 4.332-1.862 6.239-3.194 1.886-1.316 4.064-2.238 5.98-3.576 1.879-1.313 2.927-3.85 4.847-5.195 1.873-1.311 3.792-2.603 5.715-3.955 1.868-1.311 3.975-2.339 5.903-3.696 1.519-1.056 2.679-1.353 3.073-2.155.95-1.925-.343-3.792-1.765-5.623-1.113-1.433-2.742-2.308-4.81-3.328-1.748-.861-3.218-3.233-5.361-3.591-2.85-.477-6.012.879-8.872 1.281-3.205.45-6.414.697-8.487 2.197-2.839 2.015-2.483 2.519-5.329 4.523-2.846 2.005-3.082 1.669-5.928 3.673-2.845 2.004-2.911 1.911-5.757 3.914-2.844 2.003-2.377 2.666-5.221 4.669-2.846 2.004-3.737.74-6.582 2.744-2.847 2.005-2.785 2.09-5.633 4.095-2.846 2.004-1.895 3.355-4.742 5.36-2.846 2.004-2.957 1.847-5.805 3.851-2.848 2.006-3.249 1.435-6.098 3.441-2.845 2.004-2.513 2.475-5.359 4.479-2.85 2.006-3.234 1.46-6.082 3.466-2.852 2.007-2.254 2.854-5.105 4.861-2.85 2.007-3.209 1.5-6.073 3.489-2.26 1.51-5.111 3.316-5.377 3.855-1.015 2.061-.424 4.727.95 6.661 1.062 1.495 2.875 3.084 5.212 4.148 1.752.797 4.075.795 6.479 1.197 3.65.61 3.496 1.533 7.146 2.144 3.652.611 3.786-.184 7.436.427 3.652.611 3.547 1.24 7.199 1.852 3.653.61 3.641.677 7.293 1.288 3.652.61 3.623.79 7.276 1.401 3.654.611 3.759-.019 7.414.592 3.654.611 5.8-2.379 7.885.684 1.731 2.541-2.035 3.07-3.395 5.827-1.361 2.757-.87 3-2.231 5.757-1.009 2.044-1.611 4.357-.197 6.144 1.096 1.381 3.716 1.443 5.966 2.412 1.726.742 3.538 1.506 5.81 1.886 2.531.423 4.892.255 7.244.093 2.67-.185 5.06-.248 7.134-1.09 2.645-1.076 5.302-2.051 6.267-4.006 1.36-2.758 1.716-2.582 3.076-5.34 1.361-2.757.005-3.381 2.321-5.402 1.155-1.006 1.161-1.02 2.671-.767 2.477.414 4.857 1.777 7.162 1.589 2.609-.211 4.728-1.912 6.755-2.769 2.582-1.091 3.948-2.473 4.883-4.37.936-1.894.812-2.997-.573-4.784-1.052-1.356-1.902-3.469-4.055-4.438-1.657-.746-3.659-1.726-5.864-2.094M613.2103 149.7974c-.818-1.949-2.578-3.771-5.429-4.907-2.115-.843-4.719-.793-7.49-.997-2.407-.178-4.891-.296-7.513.124-1.66.265-2.431 1.606-3.591.388-2.688-2.822-.534-4.116-2.041-7.709-1.51-3.595-2.274-3.275-3.784-6.871-1.507-3.594-1.021-3.799-2.53-7.394-.871-2.075-3.483-3.562-6.365-4.678-2.2-.853-4.911-.375-7.724-.567-2.513-.172-5-.373-7.636.048-2.473.395-4.642.761-6.569 1.529-2.474.986-4.571 1.851-5.898 3.256-1.799 1.906-1.965 3.846-1.045 6.042 1.508 3.592 1.579 3.563 3.087 7.156 1.508 3.595.454 4.038 1.962 7.633 1.509 3.595 6.076 3.969 4.104 7.334-2.043 3.486-4.45 1.132-8.439 1.77-3.99.639-3.98.695-7.968 1.332-3.992.639-4.078.099-8.07.736-3.993.639-3.991 1.124-7.998.588.727-2.245 1.109-4.205 1.814-6.359.73-2.233 1.582-4.383 2.295-6.543.734-2.222.792-4.634 1.514-6.804.734-2.208 2.521-4.045 3.248-6.225.732-2.193.412-4.729 1.144-6.922.728-2.18 1.537-4.338 2.272-6.546.72-2.168 2.629-3.963 3.363-6.184.713-2.16 1.83-4.222 2.56-6.456.706-2.154.12-4.776.848-7.02.494-1.432.356-2.192.002-3.033-.832-1.984-2.613-4.365-5.545-5.527-2.238-.885-5.211-.217-7.959-.486-2.611-.257-5.276-.965-7.805-.561-2.869.459-5.906.75-8.143 1.877-2.942 1.483-4.274 4.289-4.916 6.444-1.122 3.52-1.075 3.538-2.217 7.052-1.141 3.512-.872 3.599-2.013 7.111-1.141 3.512-1.717 3.326-2.859 6.839-1.142 3.513-2.234 3.158-3.377 6.672-1.141 3.513.041 3.897-1.1 7.411-1.142 3.513-.564 3.701-1.706 7.215-1.141 3.513-2.264 3.148-3.405 6.661-1.142 3.515.057 3.904-1.086 7.42-1.142 3.517-2.385 3.114-3.527 6.632-1.143 3.518-1.64 3.348-2.815 6.856-.765 2.078.114 5.047.351 5.613.894 2.13 3.139 3.716 6.135 4.986 2.239.949 4.777 2.704 7.775 2.934 2.548.197 5.47-.169 8.329-.626 3.511-.56 3.422-1.118 6.932-1.68 3.512-.56 3.535-.411 7.047-.972 3.51-.562 3.521-.488 7.033-1.049 3.511-.562 3.318-1.761 6.83-2.322 3.51-.561 3.613.088 7.123-.474 3.514-.562 3.436-1.048 6.949-1.609 3.515-.562 3.564-.258 7.078-.821 3.516-.561 3.938-2.29 7.131-.717 2.813 1.383.45 3.254 1.663 6.144s1.233 2.881 2.445 5.772c.881 2.102 3.414 4.218 6.289 5.345 2.178.854 5.109.338 7.969.511 2.472.149 5.201.945 7.904.514 2.472-.396 4.693-1.397 6.619-2.162 2.477-.987 3.648-3.126 4.975-4.53 1.802-1.904 3.427-3.541 2.505-5.737-1.212-2.89-1.992-2.563-3.205-5.452-1.213-2.891-1.683-2.781-1.243-5.885.237-1.664.909-.691 2.57-.956 2.419-.386 4.661-.629 6.529-1.401 2.399-.993 3.945-2.595 5.209-4.005 1.7-1.896 2.301-3.633 1.408-5.758M397.50009 190.987665c2.190043 0 5.309527.754838 7.438254.652156 2.856902-.137806 4.696065-1.173185 7.417032-1.484583 3.817702-.436913 7.418372-.290155 10.89936-1.038027 3.977765-.854602 9.338359-2.071236 11.203375-3.859003 5.23256-5.01583 10.614644-4.516187 14.349562-7.340479 2.621487-1.982332 5.567546-4.627591 6.96541-6.896887 1.378088-2.237192 1.226545-4.095002 1.226545-6.527009 0-2.966463.261675-5.625131-3.114592-8.48202-3.376267-2.85689-5.01105-5.175644-8.751672-7.396904C434.280006 142.169957 416.983686 138 397.50009 138c-18.838927 0-39.572.825081-45.43601 8.185889-2.187509 2.745874-7.092672 5.631333-9.196203 7.79598-3.1317 3.222687-4.867324 6.777073-4.867324 10.511964 0 4.356835-.489866 9.486162 6.546393 12.093624 3.655828 1.354759 5.919053 6.921985 11.665027 6.983269 3.940989.042034 11.175089 3.481607 18.11803 5.546485 6.942941 2.064878 15.265143 1.870454 23.170087 1.870454z"/>
            <g fill="#E2F1EA">
              <path d="M110.5459458 123.5300799c-.8048972-.13252-1.5786371-.2953302-2.3402603-.3899873-.7702779-.0473286-1.5163224-.0965503-2.2381335-.1400926-1.4730484.145772-2.8647416.2366428-4.066029.7004628-2.4614276.7326462-4.3170185 1.859066-5.9112343 2.7147665-1.5699822.9068153-2.8716654 1.5732015-3.9552475 2.1165334-1.1043535.4089188-1.9646415.8689525-2.6968383.9768616-.721811.1552377-1.2636021.2707194-1.6703781.3559108-.406776.0246109-.678537.0416492-.858557.053008l-.361771.0227177c-4.0314098.0246109-7.17137434-1.2740849-9.22948782-1.81931-2.07715405-.6379891-3.16765993-.8405553-3.21612686-.6663862-.05019789.1817417.90356202.7269667 2.88032029 1.6962558.99184106.478965 2.24505734 1.048801 3.80984673 1.6262095 1.56652035.5490113 3.45846146 1.1396718 5.77275726 1.2229701l.4240857-.026504c.2111773-.0151451.5279433-.0359697 1.0022268-.0643668.4621668-.0984435 1.0783891-.2271772 1.898865-.4032394.8325926-.1363063 1.7690429-.6209508 2.982447-1.0809845 1.1493586-.5736222 2.5150874-1.2778712 4.0746839-2.177114 3.1278478-1.68679 7.2492676-4.2860749 13.335329-2.6996213 2.1360068.4903239 4.2737445 1.1775347 6.4737968 1.8212032 2.2121691.6228439 4.523003 1.0563735 6.8840347 1.115061l-.0657765-.0018932c3.9379379.3066891 7.863759.1912074 11.7151489.2555743 8.5284483-.1419857 12.6966041 1.287337 12.8091166.7761884.0415431-.1798485-.9641457-.624737-3.0568784-1.3251998-2.1031184-.5849811-5.3590574-1.3308792-9.717619-1.5069415-3.9275521-.06626-7.7875968.0473286-11.6164841-.251788h-.0155786l-.0519289-.0018931c-2.1377377-.0586874-4.2754754-.4486748-6.4149441-1.0525873-2.1411996-.6228439-4.3170185-1.3289861-6.5793854-1.8458141M336.305896 43.13364634c-3.418794-.40220366-6.299762.1793866-8.769652.73831752-2.454475.62502071-4.515 1.30480155-6.244951 1.90149806-3.468466 1.21227583-5.751659 1.82030202-7.289773 2.12997996-1.536402.23037017-2.302034.31345449-2.683993.28513029l-.38196.00755312c-1.053386.12273821-2.014279-.08874916-2.934065-.13217961-.878678-.26058265-1.743653-.35499665-2.476742-.69111051-.727949-.33800214-1.447335-.54004811-2.027982-.90826273-.594349-.34744354-1.12875-.66278632-1.603202-.94225177-1.822443-1.28214219-2.759357-1.97325271-2.884393-1.81652546-.099344.11896164.602914 1.08576106 2.322588 2.71534679.465887.36443806.991724.77419484 1.570658 1.22549378.58236.46262863 1.334289.77608312 2.103346 1.21605239.775909.4456341 1.716248.64201523 2.685706 1.00078845 1.00714.14162101 2.094782.43808099 3.261214.38332086l.42478-.00566484c.431632.02265936 1.269202-.06231324 2.935778-.31345449 1.637459-.32667246 4.064529-.98190566 7.522717-2.19040492 1.736803-.60047308 3.740805-1.25759455 6.101075-1.86184418 2.341428-.54004811 5.141893-1.06687826 8.135907-.70621676 2.982024.48528798 5.547833 1.8221903 7.822461 2.85507951 2.283193 1.07631966 4.33858 1.91660431 6.188428 2.39056261 1.848136.44563411 3.456476.62502072 4.794191.57781371 1.32915-.0849726 2.382536-.25302953 3.19784-.44941066 1.640884-.37387946 2.413367-.65712148 2.809029-.77041828l.393949-.12462649c2.118762-.76475344 3.906948-1.4237632 5.481032-1.75987705 1.563808-.33611386 2.896384-.43241615 3.961759-.3512201 2.132464.15483896 3.208117.55137779 3.27663.32289589.047959-.1132968-.899232-.87805024-3.155019-1.40676867-1.125325-.2662475-2.588075-.34555526-4.304324-.14350929-1.717961.19826941-3.656876.7496472-5.779063 1.36711479l-.38196.12273821c-.385385.10952025-1.149304.38332086-2.672003.73265268-1.519274.34744354-3.809318.75342376-7.198994-.11707337-1.692268-.43241614-3.624332-1.21605238-5.885258-2.28104236-2.279767-1.01967126-4.893534-2.43399305-8.315754-3.00047708M258.18859 113.079907c-5.906224 1.4863236-10.212556 1.1412842-13.655537.7464795-3.40129-.275368-5.718615-.5922071-7.287238-.4794057-3.126825.0381534-3.126825.0613772-3.126825.0613772-1.061383.1658843-2.056755.3234744-2.986117.4727703-.913728.1924259-1.733651.4545231-2.50146.6552432-1.532144.423005-2.734234.8742104-3.724395 1.2076379-1.961214.6187486-2.939215 1.0152121-2.90621 1.1761199.033006.159249 1.082229.0829422 3.173727-.2521441 1.023167-.180814 2.305165-.4959942 3.8182-.7697034.759124-.1277309 1.570361-.316839 2.449346-.4362757.880722-.0796245 1.823981-.1675432 2.829776-.2571208 0 0-.001737-.0165884 2.958324-.053083 1.481767-.1144601 3.701812.1924259 7.120474.4694527 3.310959.4097343 8.327776.7431618 14.251371-.782974 2.956586-.6651962 5.48584-1.0318006 7.733679-1.0351183 2.220046.0049765 4.22295.3251333 5.904487.4910176 3.371759.3483571 5.640444.7000319 7.146531.8841635l3.02086.3848517c2.093235.1559313 3.924165.2886387 5.496263.4047578 1.577309.0447887 2.900998-.0016589 3.950221-.021565 2.105395-.0597184 3.145933-.1774962 3.145933-.3400629 0-.1642255-1.040538-.3748986-3.104242-.6204074-1.031852-.1111425-2.317324-.2504853-3.859891-.4147108-1.539092-.2272616-3.335279-.4926765-5.385087-.794586l-3.012174-.381534c-1.513035-.1907669-3.750452-.5358063-7.186485-.8924577-1.72149-.1675431-3.670544-.4910176-6.11989-.5026295-2.418078 0-5.178369.4097343-8.143641 1.079907M651.678551 102.7810693c-6.879739 1.6170922-10.288926 1.3746156-11.976474 1.1897054-.848888-.0662886-1.254581-.2145657-1.46595-.2337545l-.207961-.040122c-1.169351-.0994328-2.156311-.3872648-3.01713-.5861305-.877866-.1622326-1.57334-.4291313-2.147788-.6070638-1.147192-.3523761-1.777891-.4535534-1.854598-.3017874-.080116.1517659.395466.559964 1.460837 1.228083.531833.3331873 1.196624.7588297 2.083013 1.0815504.871047.3576094 1.890394.8024406 3.134747 1.0501505l.225007.0418665c.228415.0226776.675019.176188 1.590386.2511988 1.801755.2145656 5.614931.4273868 12.564558-1.2193609 6.89849-1.6676809 10.309382-1.7130362 12.034431-1.7409472l1.709707.095944c1.182988-.0436109 2.198925.1290883 3.088723.1883991.893207.0366332 1.621069.2006101 2.215972.2808542 1.189806.1674659 1.829029.1692103 1.880166.0069777.054547-.1622325-.477286-.4884421-1.626182-.9821175-.576152-.2407322-1.293786-.5651973-2.209153-.7588297-.908548-.2145656-1.97051-.5337974-3.219977-.6262525L664.11697 101c-1.798346.0139555-5.541634.1098995-12.438419 1.7810693M522.086415 243c-5.799158.112897-9.866918 1.222296-12.890046 1.883118-1.501339.322132-2.752171.588569-3.7951.811352-1.039519.144507-1.874543.26192-2.540859.355248-1.330926.222783-2.007466.096339-2.339771.150529l-.332306.007527c-1.838757.198698-3.447456-.039138-4.839731-.103865-1.407612-.016559-2.532339-.347723-3.466202-.46363-1.854095-.298047-2.827154-.373312-2.879982-.23332-.054532.139992.812871.499757 2.632883 1.077788.921934.255899 2.036436.724045 3.495172.877584 1.441695.201709 3.125376.569 5.103872.478683l.361276-.007527c.35105-.05419 1.092347.073759 2.498255-.161066.703806-.099349 1.586546-.221278 2.687415-.376323 1.065081-.227298 2.344884-.501261 3.880306-.83092 3.000974-.668349 7.049989-1.722052 12.35154-1.830433 2.632882.072254 4.749413.824899 6.707459 1.588081 1.969975.788773 3.86156 1.225307 5.41232 1.511312 3.110038.508788 5.16522.954354 6.583057.999513l2.804999.234825c3.854744.093328 6.722797-.036127 8.624607-.185151 1.905218-.141497 2.856123-.292026 2.854419-.44105 0-.147518-.952609-.293531-2.852715-.429008-1.903514-.132465-4.752821-.26192-8.496797-.57502l-2.721497-.231815c-1.371825-.037632-3.375883-.477177-6.405828-.967902-1.504747-.286005-3.161162-.654801-5.074901-1.420994-1.903514-.745118-4.403474-1.643777-7.361845-1.717536M606.821236 218.358477c-4.201855.4919-7.280829 1.280825-9.541924 1.752294-2.278135.5029-3.779284.740206-4.789706.903649l-2.022547.237306c-2.762046.359888-4.876604.477755-6.295966.501329-1.421065.066006-2.152044.179158-2.170787.3316-.017039.152442.678158.347315 2.112854.576764 1.427881.267166 3.62082.425894 6.548146.287596l2.117966-.248307c1.042796-.165014 2.630845-.419608 4.917499-.928794 2.312212-.479327 5.290656-1.243107 9.371532-1.719291 4.087692-.534332 7.054208-.369318 9.371533-.042432 2.293469.278166 3.821881.540618 4.849342.707203l2.04981.34103c5.704707.748064 8.662703.529617 8.661.245164.006815-.336315-2.78079-.726063-8.332145-1.925166l-2.054921-.342601c-1.029165-.165014-2.57632-.433751-4.937946-.719776-2.317324-.336315-5.667221-.515473-9.85374.042432M244.179716 190.945373c-8.404056 1.418144-12.599217 1.298397-14.655602 1.029822-1.040208-.058162-1.550012-.143696-1.80234-.206991l-.254044-.044477c-.705488-.095797-1.366346-.183042-1.982575-.266864-.611079-.112904-1.165513-.275418-1.68905-.390033-.523537-.118036-1.005878-.23094-1.443589-.328448-.423979-.141986-.806762-.273707-1.146631-.386611-1.371496-.451617-2.118179-.605577-2.198856-.456749-.078959.147118.506372.602155 1.802341 1.365114.326137.188173.690039.412271 1.110585.619262.437711.174488.920051.364372 1.445305.569653.530403.191595 1.100286.432799 1.73368.626104.643693.148829 1.333731.309632 2.071833.482409l.271209.049609c.269493.065006.813628.155671 1.912197.218966 2.176541.283971 6.649778.388322 15.127643-1.04864 8.440102-1.48315 12.614666-1.874893 14.717396-1.880025 1.050507-.066716 1.570611-.029081 1.831521-.023949l.260911.010264c5.734875-.114615 8.592872.684267 8.706161.249757.090976-.201859-2.652015-1.696983-8.675264-2.109254l-.274643-.006843c-.272925-.006843-.82221-.046188-1.908764.022239-2.178257.003421-6.548503.424245-14.959424 1.905685"/>
            </g>
            <g fill="#E2F1EA">
              <path d="M362.73 177.806c-7.669-2.318-10.993-4.64-12.482-5.847-.726-.638-1.083-.967-1.235-1.149l-.155-.181c-1.879-1.894-2.196-3.965-2.099-5.26.006-.667.152-1.152.207-1.491.057-.339.064-.522.018-.541-.045-.018-.143.128-.297.446-.149.321-.399.799-.502 1.516-.036.177-.073.366-.112.565-.001.205-.002.421-.003.648.008.225-.016.47.025.717.05.249.102.507.154.777.27 1.058.832 2.266 1.798 3.346l.172.2c.17.201.555.56 1.339 1.247 1.597 1.3 5.087 3.702 12.858 6.047 3.878 1.166 6.845 1.802 9.068 2.271 2.224.462 3.718.714 4.71.893l1.992.33c5.491.709 8.267.744 8.285.561.022-.208-2.706-.635-8.115-1.634l-1.976-.329c-.986-.175-2.47-.426-4.677-.886-2.203-.463-5.145-1.096-8.973-2.246M423.435 180.6c-9.654 2.078-14.639 2.18-17.086 2.358l-2.465.116c-6.758.295-10.148-.061-10.173.189-.011.097.825.266 2.52.501 1.699.213 4.261.387 7.684.395l2.49-.115c2.477-.18 7.509-.282 17.271-2.385 9.723-2.31 14.233-4.699 16.458-5.809l2.204-1.2c2.891-1.885 4.85-3.605 5.99-4.892 1.109-1.326 1.611-2.011 1.534-2.074-.241-.23-2.251 2.654-8.08 6.032l-2.152 1.171c-2.174 1.084-6.586 3.428-16.195 5.713M433.367 183.71c-3.393 1.297-5.192 1.575-6.075 1.718-.887.152-.888.13-.889.13-2.423.418-3.687.371-3.711.603-.028.156 1.239.61 3.841.476 0 0 .004.023.932-.137.926-.148 2.809-.443 6.299-1.777 3.461-1.399 5.056-2.374 5.874-2.817l.805-.463c2.116-1.442 3.006-2.38 2.898-2.528-.122-.172-1.236.439-3.451 1.594l-.789.451c-.797.432-2.364 1.39-5.734 2.75M369.604 186.862c-1.332-.222-2.322-.419-3.055-.597-.743-.152-1.225-.293-1.546-.387l-.646-.182c-1.796-.39-2.724-.58-2.805-.378-.068.162.722.725 2.498 1.42l.666.188c.331.095.831.242 1.591.399.756.182 1.767.383 3.124.61 2.713.419 4.069.552 4.746.64l.677.08c3.733.152 3.807-.332.126-1.08l-.674-.079c-.675-.089-2.03-.221-4.702-.634M448.16 160.552l-1.014-1.045c-.912-.507-1.247-.152-.78.758l.994 1.023.875 1.075c.835.556 1.276.332.871-.651l-.946-1.16"/>
            </g>
            <g>
              <path fill="#EF9F48" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M443.432 163.443c-3.257-20.265-24.752-38.841-45.253-39.026-21.139-.192-40.534 18.863-46.548 37.962-.452 1.439.262 3.323 1.637 4.011 14.342 7.213 30.589 9.449 46.509 9.361 14.007-.078 29.809-.621 42.02-8.294 1.229-.771 1.705-1.92 1.661-3.049.026-.308.027-.625-.026-.965"/>
              <path fill="#B8744B" d="M374.131 145.718c0 .552-.572 1.121-1.123 1.121-.553 0-1.244-.569-1.244-1.121s.691-1.121 1.244-1.121c.551 0 1.123.569 1.123 1.121M381.358 146.842c0 .552-.568 1.122-1.121 1.122-.552 0-1.245-.57-1.245-1.122 0-.552.693-1.124 1.245-1.124.553 0 1.121.572 1.121 1.124M433.843 161.45c0 .552-.572 1.121-1.125 1.121s-1.243-.569-1.243-1.121.69-1.123 1.243-1.123c.553 0 1.125.571 1.125 1.123M431.475 143.12c0 .554-.572 1.124-1.122 1.124-.552 0-1.247-.57-1.247-1.124 0-.552.695-1.122 1.247-1.122.55 0 1.122.57 1.122 1.122M358.668 162.275c0 .551-.569 1.121-1.12 1.121-.553 0-1.244-.57-1.244-1.121 0-.552.691-1.124 1.244-1.124.551 0 1.12.572 1.12 1.124M421.524 168.774c0 .552-.571 1.122-1.122 1.122-.553 0-1.246-.57-1.246-1.122 0-.551.693-1.122 1.246-1.122.551 0 1.122.571 1.122 1.122M381.95 163.696c0 .551-.57 1.121-1.12 1.121-.554 0-1.247-.57-1.247-1.121 0-.55.693-1.125 1.247-1.125.55 0 1.12.575 1.12 1.125M384.205 139.868c0 .275-.288.563-.563.563-.274 0-.623-.288-.623-.563 0-.277.349-.561.623-.561.275 0 .563.284.563.561M377.331 142.561c0 .273-.286.559-.56.559-.278 0-.624-.286-.624-.559 0-.28.346-.564.624-.564.274 0 .56.284.56.564M420.934 141.998c0 .276-.288.563-.564.563-.274 0-.623-.287-.623-.563 0-.275.349-.56.623-.56.276 0 .564.285.564.56M397.486 163.134c0 .274-.288.561-.561.561-.277 0-.626-.287-.626-.561 0-.279.349-.563.626-.563.273 0 .561.284.561.563M368.297 160.327c0 .275-.285.562-.56.562-.276 0-.624-.287-.624-.562 0-.277.348-.561.624-.561.275 0 .56.284.56.561M417.73 133.944c0 .274-.285.56-.561.56-.275 0-.624-.286-.624-.56 0-.278.349-.563.624-.563.276 0 .561.285.561.563M390.332 173.125c0 .276-.285.562-.56.562-.276 0-.625-.286-.625-.562 0-.277.349-.562.625-.562.275 0 .56.285.56.562M365.454 160.889c0 .275-.286.561-.559.561-.278 0-.624-.286-.624-.561 0-.279.346-.562.624-.562.273 0 .559.283.559.562M425.075 152.486c0 .274-.285.562-.562.562-.274 0-.623-.288-.623-.562 0-.278.349-.563.623-.563.277 0 .562.285.562.563M405.734 153.049c0 .273-.287.56-.56.56-.278 0-.624-.287-.624-.56 0-.278.346-.563.624-.563.273 0 .56.285.56.563M393.801 150.086c0 .274-.285.56-.562.56-.275 0-.623-.286-.623-.56 0-.278.348-.563.623-.563.277 0 .562.285.562.563M402.179 162.571c0 .277-.285.563-.56.563-.277 0-.622-.286-.622-.563 0-.275.345-.56.622-.56.275 0 .56.285.56.56M398.079 130.152c0 .276-.285.56-.561.56-.277 0-.624-.284-.624-.56 0-.278.347-.563.624-.563.276 0 .561.285.561.563M382.543 131.276c0 .274-.286.561-.562.561-.274 0-.623-.287-.623-.561 0-.278.349-.564.623-.564.276 0 .562.286.562.564"/>
            </g>
            <g fill="#F50057" fillRule="nonzero" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
              <path d="M392.2454479 136.501218l-.0004694-.000676c-6.2074694-8.955723-28.6669937-40.8030934-32.6742704-46.7764351-7.43902413-11.0887858-10.89716852-17.6209259-12.62298123-24.1425226C345.9280552 61.7283924 345.5 57.7852234 345.5 52.7499874 345.5 23.8924869 369.0054998.5 398 .5s52.5 23.3924869 52.5 52.2499874c0 5.035236-.428055 8.978405-1.447727 12.8315969-1.725813 6.5215967-5.183957 13.0537368-12.6229811 24.1425226-4.0072767 5.9733417-26.466801 37.8207121-32.6747441 46.7771171-2.781262 3.998418-8.7279921 3.998319-11.5090999-.000006zM398 73.8124821c11.6906248 0 21.1666667-9.4304817 21.1666667-21.0624947 0-11.6320131-9.4760419-21.0624948-21.1666667-21.0624948s-21.1666667 9.4304817-21.1666667 21.0624948c0 11.632013 9.4760419 21.0624947 21.1666667 21.0624947z"/>
            </g>
          </svg>
        )
      default:
        return null
    }
  }

  get url() {
    return `https://www.emcasa.com${this.props.asPath}`
  }

  get canonical() {
    return `https://www.emcasa.com/404`
  }

  render() {
    return (
      <>
        <NextHead
          title={`${this.title} | EmCasa`}
          description={this.message}
          imageSrc={imageUrl('buy')}
          imageWidth={'1024'}
          imageHeight={'768'}
          url={this.url}
          canonical={this.canonical}
        />
        <Col px={4}>
          <Row justifyContent="center">
            <Col width={[1, HTTPMessageSvgWidth]}>
              <Text
                fontSize={4}
                fontWeight="bold"
                textAlign="center"
              >{this.title}</Text>
              <Text
                textAlign="center"
                color="grey"
              >
                {this.message}
              </Text>
              {this.asset && (
                <Asset justifyContent="center">
                  {this.asset}
                </Asset>
              )}
              <Row justifyContent="center">
                <Col width={[1, 1/2]}>
                  <Link
                    passHref
                    href={this.href}
                  >
                    <a>
                      <Button
                        fluid
                        active
                        height="tall"
                      >
                        {this.button}
                      </Button>
                    </a>
                  </Link>
                  <View mt={2}>
                    <Link
                      passHref
                      href='/imoveis'
                    >
                      <a>
                        <Button
                          fluid
                          height="tall"
                        >
                          Explorar imóveis
                        </Button>
                      </a>
                    </Link>
                  </View>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </>
    )
  }
}