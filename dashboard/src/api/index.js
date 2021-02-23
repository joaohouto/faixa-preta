import axios from 'axios'

const api = axios.create({
    baseURL: 'http://faixa-preta.herokuapp.com/',
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": localStorage.getItem('@faixa-preta/token')
    }
});

export default api;