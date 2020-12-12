import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ButtonsWrapper = styled.View`
    padding: 60px 0;
`;

export const Button = styled(TouchableOpacity)`
    width: 100%;
    height: 40px;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #555;
    font-weight: bold;
`;

export const Logo = styled.Image`
    height: 13px;
    width: 185px;
`;