import styled from "styled-components";

export const Row = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 22px;
	margin-top: 22px;
`;

export const Section = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Time = styled.Text`
	font-size: 18px;
	color: #fff;
	font-family: "Roboto-Bold";
`;

export const Desc = styled.Text`
	font-size: 10px;
	color: #999999;
	font-family: "Roboto-Bold";
`;
