import api from '../api'

export const verifyAuth = async () => {
    const response = await api.get('/verifytoken');

    return response.data.auth;
}