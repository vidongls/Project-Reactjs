import axios from 'axios'

const requestClient = axios.create({
  baseURL:
    'https://ecomerces-7cb8c-default-rtdb.asia-southeast1.firebasedatabase.app/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default requestClient
