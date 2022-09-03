import styled from "styled-components";

export const Row = styled.TouchableOpacity`
	display: flex;
	margin-bottom: 20px;
	flex-direction: row;
`;

export const Title = styled.Text`
	font-size: 16px;
	color: #222;
	max-width: 190px;
	overflow: hidden;
	font-family: "Roboto-Bold";
`;

export const Tags = styled.Text`
	font-size: 14px;
	color: #999;
	max-width: 190px;
	font-family: "Roboto-Regular";
`;

export const Section = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
`;

export const ActivityImage = styled.ImageBackground`
	width: 120px;
	height: 66px;
	background: #f1f1f1;
	border-radius: 20px;
	margin-right: 24px;
`;
