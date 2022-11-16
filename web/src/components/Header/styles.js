import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background: #fff;
	color: #222;
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;

	> h1 {
		color: #222;
		font-size: 20px;
		margin-right: 20px;
		display: flex;
		justify-content: center;
		align-items: center;

		> img {
			height: 15px;
		}
	}

	> button {
		padding: 10px 20px;
		border-radius: 8px;
		margin-left: 20px;
		font-size: 16px;
		background: #ddd;
		color: #222;
		cursor: pointer;
	}
`;

export const Dropdown = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	> button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		margin-left: 10px;
		height: 30px;
		width: 30px;
		border-radius: 8px;
		cursor: pointer;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;

	p {
		font-weight: 700;
		font-size: 16px;
		color: #222;
		max-width: 150px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		font-size: 14px;
		color: #999;
		max-width: 150px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

export const DropdownContent = styled.div`
	background: #222;
	padding: 10px;
	width: 260px;
	border-radius: 12px;
	position: absolute;
	top: 75px;
	right: 0;
	box-shadow: none;
	transition: all 0.35s;

	> button {
		width: 100%;
		padding: 5px 10px;
		cursor: pointer;
		text-align: left;
		background: none;
		color: #fff;
	}
`;

export const UserButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 46px;
	min-width: 46px;
	background: rgba(0, 0, 0, 0.1);
	color: #777;
	font-weight: bold;
	font-size: 18px;
	border-radius: 50%;
	margin-right: 15px;

	@media (max-width: 800px) {
		margin-right: 0;
	}
`;
