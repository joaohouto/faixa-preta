import React from "react";

import logoImg from "../../assets/images/logo-x.svg";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="Faixa Preta" />
    </Container>
  );
}

export default Header;