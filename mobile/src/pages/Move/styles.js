import styled from "styled-components";
import { Dimensions } from "react-native";

export const Details = styled.Text`
	font-size: 16px;
	color: #777;
	margin-bottom: 20px;
	font-family: "Roboto-Regular";
`;

export const Label = styled.Text`
	font-size: 14px;
	color: #111;
	text-transform: uppercase;
	margin-bottom: 30px;
	margin-top: 10px;
	font-family: "Roboto-Bold";
`;

export const Category = styled.Text`
	font-size: 14px;
	color: #555;
	margin-bottom: 10px;
	margin-top: 30px;
	font-family: "Roboto-Bold";
`;

export const Title = styled.Text`
	font-size: 18px;
	color: #222;
	margin-bottom: 8px;
	font-family: "Roboto-Bold";
`;

export const ImageBox = styled.ImageBackground`
	height: ${Dimensions.get("screen").width - 60}px;
	width: ${Dimensions.get("screen").width - 60}px;
	background: #111;
	border-radius: 20px;
`;

export const FifityFiveView = styled.View`
	height: 55px;
`;
