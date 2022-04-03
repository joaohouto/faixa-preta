import React from "react";
import { IconInfoCircle } from "tabler-icons";

import iconImg from "../../assets/images/icon.svg";
import mobileImg from "../../assets/images/mobile.png";
import googleImg from "../../assets/icons/google-play.svg";

const Login = () => {
	return (
		<div>
			<div className="home-section">
				<div className="wrapper">
					<header>
						<div className="brand">
							<img src={iconImg} alt="Ícone" />
							<h1>Faixa Preta</h1>
						</div>

						<a href="/privacidade/">Política de Privacidade</a>
						<a id="icon" href="/privacidade/">
							<IconInfoCircle color="#777" />
						</a>
					</header>

					<div className="wrapper">
						<div className="column">
							<h2 className="animate-opacity-one">
								O treino que vai além do dojo.
							</h2>
							<p className="animate-opacity-two">
								O Faixa Preta é a proposta de um app para ajudar karatecas em
								seus treinos individuais, contando com recursos que facilitam o
								seu aprendizado e aperfeiçoamento.
							</p>

							<div className="buttons animate-opacity-three">
								<a href="https://play.google.com/store/apps/details?id=com.faixapreta">
									<button className="download">
										<img src={googleImg} alt="Google Play" />

										<div>
											<span>Download na loja</span>
											<h3>Google Play</h3>
										</div>
									</button>
								</a>
							</div>
						</div>

						<img
							className="animate-opacity-mobile "
							style={{ objectFit: "contain" }}
							src={mobileImg}
							alt="Android App"
						/>
					</div>
				</div>
			</div>

			<div className="section" style={{ background: "#fff" }}>
				<div className="wrapper">
					<h2>Sobre.</h2>
					<p>
						O Faixa Preta é a proposta de um aplicativo para ajudar karatecas em
						seus treinos individuais, contando com programas de treino
						específicos e detalhes da execução de técnicas. Além disso,
						relatórios da execução de treinos podem ser encontrados na seção de
						estatísticas do app.
					</p>
					<p>
						Este é um projeto inicialmente idealizado como um Trabalho de
						Conclusão de Curso para o Curso Técnico de Informática, do Instituto
						Federal de Mato Grosso do Sul - Campus Aquidauana. Orientado pelo
						Prof. Ygo Brito e desenvolvido por João Couto.
					</p>
					<p>
						Para elogios, críticas e outros, envie um email para{" "}
						<a href="mailto:contato@joaocouto.com">contato@joaocouto.com</a>.
					</p>
				</div>
			</div>

			<footer>
				<div className="wrapper">
					<p>&copy; 2021 Faixa Preta</p>
				</div>
			</footer>
		</div>
	);
};

export default Login;
