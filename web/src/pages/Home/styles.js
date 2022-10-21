import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-height: 100vh;
	background: linear-gradient(
		125deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(241, 241, 241, 1) 100%
	);

	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;

		> a {
			display: flex;
			align-items: center;
			gap: 10px;
			color: #777;

			> span {
				font-size: 14px;
				font-weight: 600;
				font-family: "Montserrat", sans-serif;
			}
		}
	}

	footer {
		color: #777;
		font-family: "Montserrat", sans-serif;
		font-size: 12px;
		font-weight: 600;
		margin-top: 80px;
	}

	@media (max-width: 1080px) {
		header {
			a {
				span {
					display: none;
				}
			}
		}
	}
`;

export const Wrapper = styled.div`
	width: 1000px;
	padding: 40px 0;

	@media (max-width: 1080px) {
		width: 100%;
		padding: 40px 10%;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;

	> img:first-child {
		height: 40px;
		margin-right: 20px;
	}

	> img {
		height: 14px;
	}
`;

export const HomeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	> div {
		margin: 0;

		> h1 {
			font-family: "Montserrat", sans-serif;
			font-size: 40px;
			font-weight: 700;
			line-height: 120%;
			max-width: 340px;
			color: #222;
			margin-bottom: 20px;
			animation: opacOne 1s ease-in-out;
		}

		> p {
			font-size: 16px;
			line-height: 150%;
			max-width: 400px;
			color: #777;
			margin-bottom: 60px;
			animation: opacTwo 1s ease-in-out;
		}

		> a {
			width: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			background: #0071bd;
			color: #fff;
			padding: 16px 54px 16px 40px;
			border-radius: 8px;
			cursor: pointer;
			transition: background 0.2s ease-in-out;
			box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2);
			animation: opacThree 1s ease-in-out;

			> div {
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				> p {
					opacity: 0.8;
					font-size: 13px;
				}

				> strong {
					font-size: 18px;
				}
			}

			:hover {
				background: #0062a3;
				filter: none;
			}
		}
	}

	> img {
		width: 300px;
		height: 594.05px;
		margin: 50px;
		animation: opac 1s ease-in-out;
		filter: drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.3));
	}

	@media (max-width: 1080px) {
		flex-direction: column;

		> div {
			width: 100%;
			margin: 50px 0;
		}

		> img {
			margin: 50px 0;
			width: 100%;
			height: auto;
		}
	}

	@keyframes opacOne {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes opacTwo {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}
		30% {
			opacity: 0;
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes opacThree {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}
		60% {
			opacity: 0;
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes opac {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`;

export const AdsContainer = styled.div`
	background: #f1f1f1;
	border-radius: 20px;
	padding: 20px 40px;
`;
