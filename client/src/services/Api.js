import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://api.communiteer.team`
    // baseURL: `http://localhost:8081`
  })
}
