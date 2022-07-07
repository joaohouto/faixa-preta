import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 40px;
		font-family: "Poppins", sans-serif;
		font-weight: 600;
		margin-bottom: 20px;
	}

	@media (max-width: 1080px) {
		padding: 0;
	}
`;

export const Content = styled.div`
	height: 100%;
	width: 100%;
	padding: 40px 20%;

	@media (max-width: 1080px) {
		padding: 10%;
	}
`;

export const ButtonsRow = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 40px;
`;

export const ButtonPill = styled.button`
	border: 2px solid ${props => (props.active ? "#222" : "#ddd")};
	background: ${props => (props.active ? "#222" : "transparent")};
	color: ${props => (props.active ? "#f1f1f1" : "#777")};
	padding: 6px 20px;
	border-radius: 25px;
	font-weight: 600;
	font-size: 15px;
	font-family: "Open Sans", sans-serif;
	margin-right: 10px;
	cursor: pointer;
`;
