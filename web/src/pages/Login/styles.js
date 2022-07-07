import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	padding: 0 10%;

	display: flex;
	justify-content: center;
	align-items: center;

	> form {
		width: 50%;
		padding-right: 60px;
	}

	> img {
		width: 50%;
		height: auto;
		border-radius: 20px;
		object-fit: cover;
	}

	@media (max-width: 600px) {
		flex-direction: column;

		> form,
		> img {
			width: 100%;
		}

		> form {
			padding: 0;
			margin-bottom: 60px;

			> button,
			input {
				width: 100%;
			}
		}
	}
`;
