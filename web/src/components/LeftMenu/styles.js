import styled from "styled-components";

export const Container = styled.nav`
	width: 250px;
	height: auto;
	border-radius: 0;
	border-right: 1px solid #eee;
	padding: 0;
	margin: 0;
	@media (max-width: 800px) {
		width: 100%;
		height: auto;
		border: 0;
		padding: 20px;
	}
	> ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}
`;

export const NavItem = styled.li`
	display: flex;

	> a {
		width: 100%;
		padding: 14px 24px;
		border-radius: 0;
		font-size: 16px;
		background: ${props => (props.active ? "rgba(0, 0, 0, 0.1)" : "none")};
		color: ${props => (props.active ? "#1a1a1a" : "#777")};
		display: flex;
		align-items: center;
		font-weight: 600;

		> svg {
			margin-right: 20px;
		}

		@media (max-width: 800px) {
			border-radius: 8px;
		}
	}
`;

export const Info = styled.div`
	font-size: 12px;
	color: #999;
	margin-top: 40px;
	> a {
		color: #999;
		font-weight: 600;
		border-bottom: 2px solid #eee;
	}
`;
