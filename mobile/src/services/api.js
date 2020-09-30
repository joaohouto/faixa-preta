import axios from 'axios'

const api = axios.create({
    baseURL: 'http://faixa-preta.herokuapp.com/'
})

export default api;