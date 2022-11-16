import styled from "styled-components";

export const ContainerLight = styled.div`
	flex: 1;
	padding: 38px;
`;

export const ContainerDark = styled.div`
	flex: 1;
	padding: 38px;
	background: #111;
`;

export const InputLabel = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #777;
	margin-bottom: 8px;
`;

export const PageTitleDark = styled.h1`
	font-size: 32px;
	font-weight: 600;
	color: #222;
	font-family: "Montserrat", sans-serif;
`;

export const SimpleTextDark = styled.p`
	font-size: 14px;
	color: #555;
	margin-bottom: 22px;
	margin-top: 22px;
`;

export const SimpleTextLight = styled.p`
	font-size: 14px;
	color: #ddd;
	margin-bottom: 22px;
	margin-top: 22px;
`;

export const Bold = styled.p`
	font-weight: bold;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;

	@media (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Dot = styled.a`
	height: 30px;
	width: 30px;
	border-radius: 15px;
	background: #ddd;
	color: #777;
	margin: 20px 10px;
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	height: 100vh;
	width: 100vw;

	display: grid;
	grid-template-columns: 250px auto;
	grid-template-rows: 60px auto;

	@media (max-width: 800px) {
		grid-template-columns: 0 auto;
		grid-template-rows: 60px auto;
	}
`;

export const Main = styled.div`
	height: 100%;
	width: 100%;
	padding: 60px 10%;
	overflow-y: scroll;

	background: #fafafa;
`;
