import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 10%;
	background: #fff;
	border-bottom: 1px solid #eee;

	> img {
		height: 20px;
	}

	> h1 {
		font-size: 14px;
		color: #999;
		margin-left: 10px;
		font-weight: 500;
		text-transform: lowercase;
	}
`;
