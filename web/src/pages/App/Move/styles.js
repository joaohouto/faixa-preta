import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;

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

export const MoveContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	> img {
		border-radius: 20px;
	}

	div {
		> span {
			color: #777;
			font-size: 14px;
		}

		> h1 {
			font-size: 40px;
			font-family: "Poppins", sans-serif;
			font-weight: 600;
			margin-bottom: 20px;
			line-height: 120%;
		}

		> p {
			font-size: 16px;
			color: #444;
			line-height: 150%;
		}
	}

	@media (max-width: 1080px) {
		flex-direction: column;

		> img {
			width: 100%;
		}
	}
`;
