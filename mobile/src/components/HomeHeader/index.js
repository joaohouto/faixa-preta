import React from 'react'
import { SafeAreaView } from 'react-native'

import { Header, Logo } from './styles'

import logoImg from '../../assets/logo.png'

const HomeHeader = () => {
    return (
        <Header>
            <Logo source={logoImg} />
        </Header>
    );
}

export default HomeHeader;