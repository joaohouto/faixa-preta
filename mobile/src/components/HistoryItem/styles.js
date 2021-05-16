import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
	margin-bottom: 22px;
`;

export const Row = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
`;

export const Title = styled.Text`
	font-size: 18px;
	color: #fff;
	max-width: 240px;
	font-family: "Roboto-Bold";
`;

export const Tags = styled.Text`
	font-size: 14px;
	color: #999;
	font-family: "Roboto-Bold";
`;

export const Section = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const MoveImage = styled.View`
	width: 66px;
	height: 66px;
	background: #333;
	border-radius: 10px;
	margin-right: 24px;
	padding: 6px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Day = styled.Text`
	font-size: 30px;
	line-height: 35px;
	color: #999;
	font-family: "Poppins-SemiBold";
`;

export const Month = styled.Text`
	line-height: 20px;
	font-size: 10px;
	color: #999;
	font-family: "Roboto-Regular";
`;

export const Menu = styled.View`
	display: flex;
	margin-top: 10px;
`;

export const Option = styled(TouchableOpacity)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 20px;
	background: ${props => props.color};
	border-radius: 10px;
	flex: 1;
`;

export const OptionText = styled.Text`
	font-size: 16px;
	color: #ddd;
	margin-left: 10px;
`;
