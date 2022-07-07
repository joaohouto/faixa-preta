import styled, { css } from "styled-components";

const toastTypeVariations = {
	info: css`
		> div:first-child {
			> svg {
				color: #0075ff;
			}

			background: #d6e9ff;
		}
	`,
	success: css`
		> div:first-child {
			> svg {
				color: #3ca422;
			}

			background: #e3f8dd;
		}
	`,
	error: css`
		> div:first-child {
			> svg {
				color: #df3030;
			}

			background: #f9dcdc;
		}
	`,
};

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	position: relative;

	width: 350px;
	height: auto;
	background: #fafafa;
	padding: 16px 20px;
	border-radius: 20px;
	margin-bottom: 20px;
	cursor: pointer;
	pointer-events: all;
	animation: push 0.4s ease-in-out;
	filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15));

	@keyframes push {
		from {
			transform: translateX(50px);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	${props => toastTypeVariations[props.type || "info"]}

	strong {
		font-size: 16px;
		color: #222;
	}

	p {
		font-size: 14px;
		color: #777;
	}

	> div:first-child {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		border-radius: 25px;

		> svg {
			min-width: 30px;
		}
	}

	> div:last-child {
		flex-direction: column;
		justify-content: flex-start;
	}

	@media (max-width: 800px) {
		width: 100%;
	}
`;
