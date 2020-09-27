import axios from 'axios'

const api = axios.create({
    baseURL: 'http://faixa-preta.herokuapp.com/api/'
})

export default api;