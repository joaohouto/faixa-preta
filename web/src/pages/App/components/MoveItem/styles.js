import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	margin-bottom: 20px;

	img {
		width: 60px;
		height: 60px;
		border-radius: 10px;
		object-fit: cover;
		background: #f1f1f1;
	}

	div {
		display: flex;
		flex-direction: column;

		strong {
			font-size: 18px;
			color: #222;
			font-family: "Open Sans", sans-serif;
		}

		span {
			color: #777;
			font-size: 14px;
		}
	}
`;
