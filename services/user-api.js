import { post, get } from '../lib/request'

export const createUser = async (
  name,
  email,
  password
) => {
  try {
    const response = await post("/users/register", {
      user: {
        name,
        email,
        password
      }
    })
    return response
  } catch (error) {
    return error.response && error.response.status === 422
      ? "Email is already taken."
      : "Unknown error. Please try again."
  }
}

export const getUsers = () => {
  return getData("/users", null)
}

export const getUser = (jwt, id) => {
  return getData(`/users/${id}`, jwt)
}

export const getCurrentUser = jwt => {
  return getData("/users/current", jwt)
}

const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt)
  } catch (error) {
    return error
  }
}
