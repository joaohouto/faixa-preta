import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { IconBrandGooglePlay, IconInfoCircle } from "tabler-icons";

import { Container, Wrapper, Logo, HomeContainer } from "./styles";

import iconImg from "../../assets/images/icon.svg";
import logoTextImg from "../../assets/images/logo-text.svg";
import mobileImg from "../../assets/images/mobile-front.png";

export default function Home() {
	return (
		<Container>
			<Wrapper>
				<header>
					<Logo>
						<img src={iconImg} alt="[]" />
						<img src={logoTextImg} alt="Faixa Preta" />
					</Logo>

					<Link to="/privacidade">
						<IconInfoCircle size={24} />
						<span>Política de Privacidade</span>
					</Link>
				</header>

				<HomeContainer>
					<div>
						<h1>O treino que vai além do dojo.</h1>
						<p>
							O Faixa Preta é a proposta de um app para ajudar karatecas em seus
							treinos individuais, contando com recursos que facilitam o seu
							aprendizado e aperfeiçoamento.
						</p>

						<a href="https://play.google.com/store/apps/details?id=com.faixapreta">
							<IconBrandGooglePlay size={35} strokeWidth={1.5} />

							<div>
								<p>Download na loja</p>
								<strong>Google Play</strong>
							</div>
						</a>
					</div>

					<img src={mobileImg} loading="lazy" alt="Aplicação" />
				</HomeContainer>
				{/* 
				<AdsContainer>
					<button>Acesse a nossa wiki</button>
				</AdsContainer>
 */}
				<footer>
					&copy; {moment().format("YYYY")} Faixa Preta - Karatê Shotokan
				</footer>
			</Wrapper>
		</Container>
	);
}
