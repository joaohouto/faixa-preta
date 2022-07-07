import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #eee;

	grid-column-start: 1;
	grid-column-end: 3;

	> img {
		height: 20px;
		margin: 20px;
	}
`;
