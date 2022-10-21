import React from "react";
import moment from "moment";

import { Container, Wrapper, Logo } from "./styles";

import iconImg from "../../assets/images/icon.svg";
import logoTextImg from "../../assets/images/logo-text.svg";

export default function Privacy() {
	return (
		<Container>
			<Wrapper>
				<header>
					<Logo>
						<img src={iconImg} alt="[]" />
						<img src={logoTextImg} alt="Faixa Preta" />
					</Logo>
				</header>

				<h1>Política de Privacidade</h1>

				<p>
					A plataforma Faixa Preta se compromete a não coletar quaisquer
					informações pessoais de seus usuários sem aviso prévio.
				</p>

				<p>
					Informações de acesso da plataforma podem ser coletadas pelos nossos
					servidores de forma anônima, para a elaboração de estatísticas de uso
					de nossos serviços.
				</p>

				<p>
					Dados de treinos executados dentro de nossos apps móveis, bem como
					informações da seção "Estatísticas", são armazenados no próprio
					dispositivo do usuário, sendo eles de total responsabilidade do
					indivíduo que o utiliza.
				</p>

				<h3>Imagens e Direitos Autorais</h3>
				<p>
					Algumas imagens utilizadas em materiais de divulgação e da interface
					do app Faixa Preta são cedidas pelos bancos de imagens gratuitos
					FreePik e Unsplash. Imagens de thumbnails, para a visualização de
					links externos, são de autoria de seus respectivos autores.
				</p>

				<h3>Sobre a plataforma</h3>
				<p>
					O Faixa Preta é a proposta de um aplicativo para ajudar karatecas em
					seus treinos individuais, contando com programas de treino específicos
					e detalhes da execução de técnicas. Além disso, relatórios da execução
					de treinos podem ser encontrados na seção de estatísticas do app.
				</p>
				<p>
					Este é um projeto inicialmente idealizado como um Trabalho de
					Conclusão de Curso para o Curso Técnico de Informática, do Instituto
					Federal de Mato Grosso do Sul - Campus Aquidauana. Orientado pelo
					Prof. Ygo Brito e desenvolvido por João Couto.
				</p>
				<p>
					Para elogios, críticas e outros, envie um email para{" "}
					<a href="mailto:appfaixapreta@gmail.com">appfaixapreta@gmail.com</a>
				</p>

				<h3>Agradecimentos</h3>
				<p>
					Agradecimentos especiais aos Senseis Seamus O'Dowd e Emrah Mihyaz que
					nos autorizaram a listar seus vídeos em nossa plataforma.
				</p>

				<footer>
					&copy; {moment().format("YYYY")} Faixa Preta - Karatê Shotokan
				</footer>
			</Wrapper>
		</Container>
	);
}
