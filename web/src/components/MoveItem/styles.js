import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin-bottom: 22px;

	display: grid;
	grid-template-columns: 100px auto 40px;
	align-items: center;

	> button {
		display: flex;
		align-items: center;
		justify-content: center;

		background: #f1f1f1;
		color: #999;
		cursor: pointer;
		height: 40px;
		border-radius: 8px;
	}
`;

export const Title = styled.span`
	font-size: 18px;
	color: #111;
	font-weight: bold;
`;

export const Tags = styled.span`
	font-size: 14px;
	color: #999;
	font-weight: bold;
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const ActivityImage = styled.div`
	width: 80px;
	height: 80px;
	background: #f1f1f1;
	border-radius: 20px;
	margin-right: 24px;
`;
