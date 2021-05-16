import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const FifityFiveView = styled.View`
	height: 55px;
`;
export const TwentyEightView = styled.View`
	height: 28px;
`;
export const NotFoundMessage = styled.Text`
	font-size: 20px;
	color: #555;
	font-family: "Roboto-Bold";
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
