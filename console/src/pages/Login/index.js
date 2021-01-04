import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../api'

import { PageTitleDark } from '../../components/Global'
import { Container, Form } from './styles';

import swal from 'sweetalert';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        const reqBody = {
            email,
            password
        }

        api.post('/login', reqBody).then(response => {
            if(response.data.auth)
                localStorage.setItem('@faixa-preta/token', response.data.token);
                history.push('/moves/1');

        }).catch(err =>{
            swal("Aviso", "Email ou senha incorreto(s)!", "error");
        });
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <PageTitleDark style={{ marginBottom: 20 }}>Login</PageTitleDark>

                <Input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email" 
                    type="email" 
                    name="email"
                    required
                />
                <Input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label="Senha" 
                    type="password"  
                    name="password"
                    style={{ marginBottom: 20 }}
                    required
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
}

export default Login;