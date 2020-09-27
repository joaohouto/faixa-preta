import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import { Header } from './styles'

const CustomHeader = ({ navigation, icon, dark }) => {
    return (
        <Header style={{ backgroundColor: dark && "#222" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={icon} type='feather' size={24} color="#999" />
            </TouchableOpacity>
        </Header>
    );
}

export default CustomHeader;