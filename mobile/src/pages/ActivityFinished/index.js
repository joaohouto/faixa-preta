import React, { Component } from "react";
import { ScrollView } from "react-native";

import ActivityService from "../../services/activity";
import { getDate, parseTime } from "../../services/calendar";
import {
	launchWorkoutNotification,
	dismissActivityNotification,
} from "../../services/notifications";

import CustomHeader from "../../components/CustomHeader";
import Badge from "../../components/Badge";
import { Icon } from "react-native-elements";

import { Row, PageTitleLight } from "../../components/Global";
import {
	ContainerDark,
	Container,
	GoodJob,
	Details,
	Square,
	RowBox,
	RowBoxItem,
	RowTitle,
	BlackDot,
	MoveName,
	MoveRepetitions,
	FifityFiveView,
} from "./styles";

class ActivityFinished extends Component {
	state = {
		message: "",
		activity: {},
		runnedMoves: [],
		timerTime: null,
		oldActivities: [],
	};

	componentDidMount() {
		this.saveData();
		this.generateRandomMessage();

		dismissActivityNotification();
	}

	saveData = () => {
		const { activity, runnedMoves, timerTime } = this.props.route.params;
		this.setState({ activity, runnedMoves, timerTime });

		let activityFinishedData = {
			date: getDate(),
			time: timerTime,
			name: activity.name,
		};

		ActivityService.create(activityFinishedData);

		launchWorkoutNotification(timerTime);
	};

	generateRandomMessage() {
		const messages = [
			"🎆 Isso aí!",
			"🎇 Muito bom!",
			"🔥 Show!",
			"✨ Bom trabalho!",
			"🌟 Isso aí!",
			"🥋 Boa!",
			"🏅 Parabéns!",
			"🏆 Sensacional!",
		];

		const randomPlace = Math.floor(Math.random() * 8);

		this.setState({ message: messages[randomPlace] });
	}

	render() {
		const { activity, runnedMoves, timerTime } = this.state;

		return (
			<>
				<CustomHeader
					icon="arrow-left"
					dark={true}
					navigation={this.props.navigation}
				/>

				<ScrollView style={{ backgroundColor: "#111" }}>
					<ContainerDark>
						<PageTitleLight>Finalizado</PageTitleLight>

						<RowBox>
							<RowBoxItem style={{ marginRight: 30 }}>
								<Icon name="info" type="feather" size={20} color="#999" />
								<RowTitle>{activity && activity.name}</RowTitle>
							</RowBoxItem>

							<RowBoxItem>
								<Icon name="clock" type="feather" size={20} color="#999" />
								<RowTitle>{parseTime(timerTime)}</RowTitle>
							</RowBoxItem>
						</RowBox>

						{runnedMoves && <Badge dark={true}>Executado</Badge>}

						{runnedMoves?.map(move => (
							<Row
								key={move._id}
								style={{
									justifyContent: "flex-start",
									alignItems: "center",
									height: 20,
									marginBottom: 20,
									marginTop: 10,
								}}
							>
								<BlackDot />
								<MoveName>{move.move_id.name}</MoveName>
								<MoveRepetitions>x{move.repetitions}</MoveRepetitions>
							</Row>
						))}
					</ContainerDark>
					<Container>
						<Row
							style={{
								flexDirection: "column",
								alignItems: "flex-start",
								width: 200,
							}}
						>
							<GoodJob>{this.state.message}</GoodJob>
							<Details>
								Mantenha foco nos treinos para poder ver sua evolução no futuro.
							</Details>
						</Row>

						<Row style={{ marginLeft: 30 }}>
							<Square>
								<Icon
									name="check-circle"
									type="feather"
									size={70}
									color="#999"
									containerStyle={{
										position: "relative",
										right: 20,
										bottom: 20,
									}}
								/>
							</Square>
						</Row>
					</Container>
				</ScrollView>
			</>
		);
	}
}

export default ActivityFinished;
