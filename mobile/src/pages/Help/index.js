import React, { Component } from "react";
import { Linking } from "react-native";

import CustomHeader from "../../components/CustomHeader";

import { ContainerLight, PageTitleDark } from "../../components/Global";
import { ButtonsWrapper, Button, ButtonText, LittleText } from "./styles";

class Help extends Component {
	render() {
		return (
			<>
				<CustomHeader icon="arrow-left" navigation={this.props.navigation} />
				<ContainerLight>
					<PageTitleDark>Ajuda</PageTitleDark>

					<ButtonsWrapper>
						<Button
							onPress={() =>
								Linking.openURL("https://faixa-preta.web.app/privacidade")
							}
						>
							<ButtonText>Imagens e Direitos Autorais</ButtonText>
						</Button>
						<Button
							onPress={() =>
								Linking.openURL("https://faixa-preta.web.app/privacidade")
							}
						>
							<ButtonText>Política de privacidade</ButtonText>
						</Button>
						<Button
							onPress={() => Linking.openURL("https://faixa-preta.web.app/")}
						>
							<ButtonText>Sobre</ButtonText>
						</Button>
						<Button
							onPress={() => Linking.openURL("mailto:appfaixapreta@gmail.com")}
						>
							<ButtonText>Fale conosco</ButtonText>
						</Button>
					</ButtonsWrapper>

					<LittleText>Versão 3.0.1</LittleText>
				</ContainerLight>
			</>
		);
	}
}

export default Help;
