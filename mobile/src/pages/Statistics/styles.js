import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
	padding: 30px;
`;

export const SectionButton = styled(TouchableOpacity)`
	padding: 10px 20px;
	border-radius: 50px;
	background: ${p => (p.active ? "#222" : "#111")};
	margin-right: 20px;
	border: 2px solid #222;
`;

export const ButtonText = styled.Text`
	color: #999;
	font-family: "Roboto-Regular";
`;
