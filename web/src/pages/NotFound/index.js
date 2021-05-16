import React from 'react'
import { IconAlertTriangle } from 'tabler-icons'
import { Wrapper, Row } from './styles'

const Login = () => {
    return (
        <Wrapper>
            <Row>
                <IconAlertTriangle size={50} color="#777" style={{ marginRight: 20 }} />

                <div>
                    <h2>Erro 404</h2>
                    <p>Página não encontrada.</p>
                </div>
            </Row>
        </Wrapper>
    );
}

export default Login;