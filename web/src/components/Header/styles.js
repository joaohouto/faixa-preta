import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #eee;

	display: flex;
	align-items: center;

	grid-column-start: 1;
	grid-column-end: 3;

	> img {
		height: 15px;
		margin: 0 20px;
	}
`;
