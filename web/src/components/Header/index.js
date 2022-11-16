import React, { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { IconChevronDown, IconUser } from "@tabler/icons";
import {
	Container,
	Dropdown,
	Column,
	DropdownContent,
	UserButton,
} from "./styles";

import logoImg from "../../assets/images/logo-x.svg";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { user, signOut } = useAuth();

	return (
		<Container>
			<h1>
				<img src={logoImg} alt="Faixa Preta" />
			</h1>

			<Dropdown>
				<UserButton>
					<IconUser size={24} />
				</UserButton>

				<Column>
					<p>{user.name}</p>
					<span>{user.email}</span>
				</Column>

				<button onClick={() => setIsDropdownOpen(s => !s)}>
					<IconChevronDown
						size={20}
						style={{
							transform: `rotate(${isDropdownOpen ? -180 : 0}deg)`,
							transition: "transform 0.35s",
						}}
					/>
				</button>

				<DropdownContent
					style={{
						transform: isDropdownOpen ? "translateY(0px)" : "translateY(20px)",
						visibility: isDropdownOpen ? "visible" : "hidden",
						opacity: isDropdownOpen ? 1 : 0,
					}}
				>
					<button onClick={() => signOut()}>Sair</button>
				</DropdownContent>
			</Dropdown>
		</Container>
	);
};

export default Header;
