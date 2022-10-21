import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #222;

	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 80px;

		> a {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 14px;
			font-weight: 600;
			font-family: "Montserrat", sans-serif;
			color: #777;
		}
	}

	footer {
		color: #777;
		font-family: "Montserrat", sans-serif;
		font-size: 12px;
		font-weight: 600;
		margin-top: 80px;
	}

	h1,
	h3 {
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
		margin: 40px 0 20px 0;
		line-height: 120%;
	}

	p {
		margin-bottom: 20px;
		max-width: 680px;
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
