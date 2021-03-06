import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import theme from '@emcasa/ui'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheckCircle from '@fortawesome/fontawesome-pro-regular/faCheckCircle'
import faCircle from '@fortawesome/fontawesome-pro-regular/faCircle'
import Text from '@emcasa/ui-dom/components/Text'
import Row from '@emcasa/ui-dom/components/Row'
import Icon from '@emcasa/ui-dom/components/Icon'
import {
  Container,
  Item,
  Dash
} from './styles'

const steps = {
  address: {
    display: 'Endereço'
  },
  info: {
    display: 'Informações'
  },
  contact: {
    display: 'Contato'
  },
  value: {
    display: 'Valor'
  }
}

class Steps extends PureComponent {
  getIcon(index, currentStepIndex) {
    if (index === currentStepIndex) {
      return <FontAwesomeIcon icon={faCheckCircle} color={theme.colors.pink} size="2x" style={{width: 22, height: 22}} />
    } else if (index < currentStepIndex) {
      return <Icon name="check-circle" color="pink" size={22} />
    }
    return <FontAwesomeIcon icon={faCircle} color={theme.colors.lightGrey} size="2x" style={{width: 22, height: 22}} />
  }

  render() {
    const { currentStep } = this.props
    const keys = Object.keys(steps)
    const currentStepIndex = keys.indexOf(currentStep)
    return (
      <Container>
        {keys.map((item, index) => {
          const last = index === keys.length - 1
          return (
            <Row flexDirection="row" key={index}>
              <Item>
                {this.getIcon(index, currentStepIndex)}
                <Text fontSize="small" color={index > currentStepIndex ? 'lightGrey' : 'dark'} textAlign="center" inline>{steps[item].display}</Text>
              </Item>
              {!last && <Dash />}
            </Row>
          )
        })}
      </Container>
    )
  }
}

Steps.propTypes = {
  currentStep: PropTypes.string.isRequired
}

export default Steps
