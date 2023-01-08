import axios from 'axios'

const baseUrl = 'http://localhost:3001/users'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const register = newObject => {
  const req = axios.post(baseUrl, newObject)
  return req.then(res => res.data)
}

const userServices = { getAll, register }

export default userServices