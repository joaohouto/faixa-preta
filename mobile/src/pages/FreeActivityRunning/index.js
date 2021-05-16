import React, { Component } from "react";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";

import {
	launchActivityNotification,
	dismissActivityNotification,
} from "../../services/notifications";

import backgroundImg from "../../assets/images/activityBackground.png";

import Button from "../../components/Button";

import { Row } from "../../components/Global";
import {
	Container,
	ControlsContainer,
	Timer,
	MoveName,
	ButtonElement,
	TenView,
} from "./styles";

class FreeActivityRunning extends Component {
	state = {
		timerOn: false,
		timerStart: 0,
		timerTime: 0,
	};
	componentDidMount() {
		this.showAlert();
	}

	componentWillUnmount() {
		this.stopTimer();
		dismissActivityNotification();
	}

	showAlert = () => {
		Alert.alert(
			"Prepare-se",
			"Aqui quem faz o treino é você.\n\nQuando estiver pronto para iniciar a atividade, toque em iniciar.",
			[
				{
					text: "Cancelar",
					onPress: () => {
						this.stopTimer();
						this.props.navigation.popToTop();
					},
					style: "cancel",
				},
				{ text: "Iniciar", onPress: () => this.startActivity() },
			],
			{ cancelable: false }
		);
	};

	startActivity = () => {
		launchActivityNotification();
		this.startTimer();
	};

	startTimer = () => {
		this.setState({
			timerOn: true,
			timerStart: Date.now() - this.state.timerTime,
			timerTime: this.state.timerTime,
		});

		this.timer = setInterval(() => {
			this.setState({ timerTime: Date.now() - this.state.timerStart });
		}, 1000);
	};

	stopTimer = () => {
		this.setState({ timerOn: false });
		clearInterval(this.timer);
	};

	handleCancel = () => {
		Alert.alert(
			"Tem certeza?",
			"Está certo de que deseja finalizar a atividade?",
			[
				{
					text: "Voltar",
					style: "cancel",
				},
				{
					text: "Finalizar",
					onPress: () => {
						this.stopTimer();

						dismissActivityNotification();
						this.props.navigation.popToTop();
						this.props.navigation.navigate("ActivityFinished", {
							activity: { name: "Treino livre" },
							timerTime: this.state.timerTime,
						});
					},
				},
			],
			{ cancelable: false }
		);
	};

	render() {
		const { timerTime, timerOn } = this.state;
		let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
		let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
		let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

		return (
			<>
				<Container
					source={timerOn ? backgroundImg : null}
					style={{ resizeMode: "contain" }}
					imageStyle={{ opacity: 0.3 }}
				>
					<Row
						style={{
							flexDirection: "column",
							alignItems: "flex-start",
							marginBottom: 120,
						}}
					>
						<Timer>
							{hours}:{minutes}:{seconds}
						</Timer>

						{timerOn ? (
							<MoveName>Treino livre</MoveName>
						) : (
							<MoveName>Pausado</MoveName>
						)}
					</Row>
				</Container>

				<ControlsContainer>
					<Row>
						<Button
							onPress={this.handleCancel}
							style={{ backgroundColor: "#333", flex: 1 }}
							textColor="#999"
						>
							Finalizar
						</Button>

						<TenView />

						<ButtonElement
							onPress={() => (timerOn ? this.stopTimer() : this.startTimer())}
							style={{ backgroundColor: "#333", width: 50 }}
						>
							<Icon
								name={timerOn ? "pause" : "play"}
								type="feather"
								size={24}
								color={timerOn ? "#999" : "#fff"}
							/>
						</ButtonElement>
					</Row>
				</ControlsContainer>
			</>
		);
	}
}

export default FreeActivityRunning;
