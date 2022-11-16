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
		width: 750px;
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
	}

	@media (max-width: 800px) {
		align-items: flex-start;
		flex-direction: column;

		> div {
			margin-top: 16px;
		}
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 14px;
	position: relative;
`;

export const IconContainer = styled.button`
	position: absolute;
	right: 0;
	background: transparent;
`;

export const Icon = styled.img`
	margin-right: 25px;
	margin-top: 12px;
	cursor: pointer;
`;

export const InputElement = styled.input`
	box-sizing: border-box;
	height: 40px;
	width: 100%;
	padding-left: 25px;
	padding-right: 25px;
	font-size: 14px;
	border-radius: 20px;

	border: 0;
	background: #f1f1f1;
	color: #999;

	outline: 0;
`;
