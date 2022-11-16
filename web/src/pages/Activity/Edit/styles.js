import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
	display: flex;
	> div {
		width: 1000px;
		padding: 40px;
		> div > h2 {
			font-size: 40px;
		}
	}
	@media (max-width: 800px) {
		flex-direction: column;
		> div {
			width: 100%;
			> div > h2 {
				font-size: 25px;
			}
		}
	}
`;

export const Image = styled.img`
	height: 200px;
	width: 100%;
	object-fit: contain;
	border-radius: 8px;
	background: #ddd;
`;

export const MoveContainer = styled.div`
	max-height: 80vh;
	margin: 10px 0;
	overflow-y: auto;
	padding-right: 10px;
	border-radius: 8px;
`;

export const ContentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 24px;

	> div {
		display: flex;
		align-items: center;
		gap: 10px;

		> button {
			padding: 10px 32px;

			> svg {
				margin-right: 10px;
			}
		}

		> button:first-child {
			background: transparent;
			color: #999;
		}
	}

	@media (max-width: 800px) {
		align-items: flex-start;
		flex-direction: column;

		> div {
			margin-top: 16px;
		}
	}
`;

export const Column = styled.div`
	width: 45%;

	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const Dot = styled.button`
	height: 20px;
	width: 20px;
	border-radius: 10px;
	background: #ddd;
	color: #777;
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;
