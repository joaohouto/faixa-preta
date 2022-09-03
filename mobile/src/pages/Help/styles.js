import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonsWrapper = styled.View`
	padding: 40px 0;
`;

export const Button = styled(TouchableOpacity)`
	width: 100%;
	height: 40px;
	justify-content: center;
	margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	color: #777;
	font-family: "Roboto-Bold";
`;

export const LittleText = styled.Text`
	font-size: 14px;
	color: #999;
	font-family: "Roboto-Regular";
`;
