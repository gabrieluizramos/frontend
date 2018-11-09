import ApolloClient from 'apollo-client'
jest.mock('apollo-client')
import { estimatePricing, getPricingInput } from 'lib/listings/get-pricing'

describe('pricing functions', () => {
  it('should create the correct input for the pricing query', () => {
    const addressInput = {}
    const homeDetails = {area: 100}
    const homeRooms = {bathrooms: 2, bedrooms: 3}
    const garage = {spots: 1}
    const userName = 'name'
    const userEmail = 'email@email.com'

    const pricingInput = getPricingInput(addressInput, homeDetails, homeRooms, garage, userName, userEmail)
    const { address, area, bathrooms, rooms, name, email, garageSpots, isCovered } = pricingInput

    expect(address).toEqual({})
    expect(area).toBe(100)
    expect(bathrooms).toBe(2)
    expect(rooms).toBe(3)
    expect(garageSpots).toBe(1)
    expect(name).toBe('name')
    expect(email).toBe('email@email.com')
    expect(isCovered).toBe(true)
  })

  it('should calculate pricing', async () => {
    ApolloClient.mockImplementation(() => {
      return {
        mutate: () => {
          return {
            data: {requestPriceSuggestion: {suggestedPrice: 1000000}}
          }
        }
      }
    })
    const apolloClient = new ApolloClient()
    const { result, error } = await estimatePricing(apolloClient, {})
    expect(result).toBe(1000000)
    expect(error).toEqual(null)
  })

  it('should fail to calculate pricing', async () => {
    ApolloClient.mockImplementation(() => {
      return {
        mutate: () => {throw Error()}
      }
    })
    const apolloClient = new ApolloClient()
    const { result, error } = await estimatePricing(apolloClient, {})
    expect(result).toEqual(null)
    expect(error).toBe('Ocorreu um erro. Por favor, tente novamente.')
  })
})
