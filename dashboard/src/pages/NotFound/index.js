import React from 'react'

import { PageTitleDark, SimpleTextDark } from '../../components/Global'
import { Container } from './styles';

const NotFound = () => {

    return (
        <Container>
            <PageTitleDark style={{ marginRight: 20 }}>404</PageTitleDark>
            <SimpleTextDark>Página não encontrada!</SimpleTextDark>
        </Container>
    );
}

export default NotFound;