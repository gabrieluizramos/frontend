import React, { Component } from 'react'
import { Formik, Field } from 'formik'

import Button from '@emcasa/ui-dom/components/Button'
import Input from '@emcasa/ui-dom/components/Input'
import Row from '@emcasa/ui-dom/components/Row'
import Col from '@emcasa/ui-dom/components/Col'
import View from '@emcasa/ui-dom/components/View'
import Text from '@emcasa/ui-dom/components/Text'

class Bedrooms extends Component {
  constructor(props) {
    super(props)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.validateBedroom = this.validateBedroom.bind(this)
    this.validateSuite = this.validateSuite.bind(this)
    this.validateBathroom = this.validateBathroom.bind(this)
    this.updateStateFromProps = this.updateStateFromProps.bind(this)
  }

  state = {
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    enterMoreBedrooms: false,
    enterMoreBathrooms: false
  }

  componentDidMount() {
    this.updateStateFromProps(this.props)
  }

  componentWillReceiveProps(props) {
    this.updateStateFromProps(props)
  }

  updateStateFromProps(props) {
    const { rooms } = props
    if (rooms) {
      this.setState({
        bedrooms: rooms.bedrooms,
        suites: rooms.suites,
        bathrooms: rooms.bathrooms,
        enterMoreBedrooms: rooms.enterMoreBedrooms,
        enterMoreBathrooms: rooms.enterMoreBathrooms
      })
    }
  }

  nextStep() {
    const { navigateTo, updateRooms } = this.props
    updateRooms(this.state)
    navigateTo('garage')
  }

  previousStep() {
    const { navigateTo } = this.props
    navigateTo('homeDetails')
  }

  validateBedroom(value) {
    if (!value) {
      return 'É necessário informar o número de quartos.'
    }
  }

  validateSuite(value) {
    if (typeof value !== 'number') {
      return 'É necessário informar o número de suítes.'
    }
  }

  validateBathroom(value) {
    if (!value) {
      return 'É necessário informar o número de banheiros.'
    }
  }

  bedroomSelection(setFieldTouched, setFieldValue, error, touched) {
    const { rooms } = this.props
    let bedrooms
    if (rooms) bedrooms = rooms.bedrooms
    if (this.state.enterMoreBedrooms) {
      return (
        <Col width={3/4}>
          <Input fluid hideLabelView placeholder="Número de quartos" type="number" error={touched ? error : null} onChange={(e) => {
            const { value } = e.target
            const intValue = parseInt(value)
            setFieldValue('bedroom', intValue)
            setFieldTouched('bedroom')
            this.setState({bedrooms: intValue})
          }} defaultValue={bedrooms} />
        </Col>
      )
    }
    return (
      <Button.Group initialValue={bedrooms} onChange={(value) => {
          if (value === 'more') {
            this.setState({enterMoreBedrooms: true})
          } else {
            const intValue = parseInt(value)
            setFieldValue('bedroom', intValue)
            setFieldTouched('bedroom')
            this.setState({bedrooms: intValue})
          }
        }}>
        <Button name="1" mr={2} value={1} height="tall">1</Button>
        <Button name="2" mr={2} value={2} height="tall">2</Button>
        <Button name="3" mr={2} value={3} height="tall">3</Button>
        <Button name="4" mr={2} value={4} height="tall">4</Button>
        <Button name="5" mr={2} value={5} height="tall">5</Button>
        <Button name="more" mr={2} value="more" height="tall">+</Button>
      </Button.Group>
    )
  }

  bathroomSelection(setFieldTouched, setFieldValue, error, touched) {
    const { rooms } = this.props
    let bathrooms
    if (rooms) bathrooms = rooms.bathrooms
    if (this.state.enterMoreBathrooms) {
      return (
        <Col width={3/4}>
          <Input fluid hideLabelView placeholder="Número de banheiros" type="number" error={touched ? error : null} onChange={(e) => {
            const { value } = e.target
            const intValue = parseInt(value)
            setFieldValue('bathroom', intValue)
            setFieldTouched('bathroom')
            this.setState({bathrooms: intValue})
          }} defaultValue={bathrooms} />
        </Col>
      )
    }
    return (
      <Button.Group initialValue={bathrooms} onChange={(value) => {
          if (value === 'more') {
            this.setState({enterMoreBathrooms: true})
          } else {
            const intValue = parseInt(value)
            setFieldValue('bathroom', intValue)
            setFieldTouched('bathroom')
            this.setState({bathrooms: intValue})
          }
        }}>
        <Button mr={2} value={1} height="tall">1</Button>
        <Button mr={2} value={2} height="tall">2</Button>
        <Button mr={2} value={3} height="tall">3</Button>
        <Button mr={2} value={4} height="tall">4</Button>
        <Button mr={2} value={5} height="tall">5</Button>
        <Button mr={2} value="more" height="tall">+</Button>
      </Button.Group>
    )
  }

  render() {
    const { rooms } = this.props
    let bedrooms, bathrooms, suites
    if (rooms) {
      bedrooms = rooms.bedrooms
      bathrooms = rooms.bathrooms
      suites = rooms.suites
    }
    return (
      <div ref={this.props.hostRef}>
        <Row justifyContent="center">
          <Col width={[1, 1/2]}>
            <Formik
              initialValues={{
                bedroom: bedrooms,
                suite: suites,
                bathroom: bathrooms
              }}
              isInitialValid={() => {
                return !(this.validateBedroom(bedrooms) && this.validateSuite(suites) && this.validateBathroom(bathrooms))
              }}
              render={({isValid, setFieldTouched, setFieldValue, errors}) => (
                <>
                  <View body p={4}>
                    <Text
                      fontSize="large"
                      fontWeight="bold"
                      textAlign="center">
                      Quantos quartos?
                    </Text>
                    <Text color="grey">Quantos quartos tem no seu imóvel?</Text>
                    <Row mb={4}>
                      <Field
                        name="bedroom"
                        validate={this.validateBedroom}
                        render={({form}) => this.bedroomSelection(setFieldTouched, setFieldValue, errors.bedroom, form.touched.bedroom)} />
                    </Row>
                    <Text color="grey">Algum deles é suíte? Quantos?</Text>
                    <Row mb={4}>
                      <Field
                        name="suite"
                        validate={this.validateSuite}
                        render={() =>
                          <Button.Group initialValue={suites} onChange={(value) => {
                            setFieldValue('suite', value)
                            setFieldTouched('suite')
                            this.setState({suites: value})
                            }}>
                            <Button mr={2} value={0} height="tall">Sem suíte</Button>
                            <Button mr={2} value={1} height="tall">1</Button>
                            <Button mr={2} value={2} height="tall">2</Button>
                            <Button mr={2} value={3} height="tall">3</Button>
                            <Button mr={2} value={4} height="tall">4</Button>
                          </Button.Group>
                        }/>
                    </Row>
                    <Text color="grey">Quantos banheiros? (Sem contar os lavabos)</Text>
                    <Row mb={4}>
                      <Field
                        name="bathroom"
                        validate={this.validateBathroom}
                        render={({form}) => this.bathroomSelection(setFieldTouched, setFieldValue, errors.bathroom, form.touched.bathroom)} />
                    </Row>
                  </View>
                  <View bottom p={4}>
                    <Row justifyContent="space-between">
                      <Col width={5/12}>
                        <Button
                          fluid
                          height="tall"
                          onClick={this.previousStep}>Voltar</Button>
                      </Col>
                      <Col width={5/12}>
                        <Button
                          fluid
                          height="tall"
                          disabled={!isValid}
                          onClick={this.nextStep}>Avançar</Button>
                      </Col>
                    </Row>
                  </View>
                </>
              )}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Bedrooms