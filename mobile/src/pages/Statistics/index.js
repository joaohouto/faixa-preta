import React, { Component } from "react";
import { Dimensions, TouchableOpacity, ScrollView, View } from "react-native";
import { Icon } from "react-native-elements";

import ActivityService from "../../services/activity";
import {
	parseTime,
	gerarCalendario,
	pegarSemanaAtual,
	getDate,
} from "../../services/calendar";
import { roundNumber } from "../../services/number";

import HomeHeader from "../../components/HomeHeader";
import Badge from "../../components/Badge";
import StatsRow from "../../components/StatsRow";
import BarChart from "../../components/BarChart";
import MonthChart from "../../components/MonthChart";

import { PageTitleLight, Row } from "../../components/Global";

import { SectionButton, ButtonText, Container } from "./styles";

export default class Statistics extends Component {
	state = {
		oldActivities: [],
		weekPeriod: null,
		weekData: [],
		weekTime: null,
		monthTime: null,
		totalTime: null,
		loading: true,
		currentPage: 1,
		monthData: [],
	};

	componentDidMount() {
		this.getOldActivities();
	}

	getOldActivities = async () => {
		const response = await ActivityService.findAll();
		this.setState({ oldActivities: response._array });

		this.fillCharts();
		this.fillRow();
	};

	fillCharts = async () => {
		let { oldActivities } = this.state;

		let week = pegarSemanaAtual();
		let weekData = [];

		week.forEach(data => {
			let timeOnDay = 0;

			oldActivities.forEach(actv => {
				if (data == actv.date) {
					timeOnDay = timeOnDay + actv.time;
				}
			});

			weekData.push(timeOnDay);
			timeOnDay = 0;
		});

		this.setState({
			weekData,
			weekPeriod: week[0].slice(0, 5) + " até " + week[6].slice(0, 5),
		});

		///-------------------------------

		let date = getDate().split("/");
		let month = gerarCalendario(date[2], date[1]);

		let monthData = [];

		month.forEach(week => {
			let weekData = [];

			week.forEach(day => {
				let timeOnDay = 0;

				oldActivities.forEach(actv => {
					if (day == actv.date) {
						timeOnDay = timeOnDay + actv.time;
					}
				});

				let onlyMinutes = parseTime(timeOnDay);
				onlyMinutes = onlyMinutes.split(":");

				onlyMinutes =
					onlyMinutes[0] * 60 + onlyMinutes[1] * 1 + onlyMinutes[2] / 60;
				onlyMinutes = roundNumber(onlyMinutes, 2);

				weekData.push({
					date: day,
					time: onlyMinutes,
				});
				timeOnDay = 0;
			});

			monthData.push(weekData);
			weekData = [];
		});

		this.setState({
			monthData,
			loading: false,
		});
	};

	fillRow = async () => {
		const { weekData, oldActivities } = this.state;

		// semana
		let weekTime = weekData.reduce((a, b) => a + b);

		// mês
		let now = new Date();
		let currentMonth = now.getMonth() + 1;
		let monthTime = 0;

		oldActivities.map(item => {
			const date = item.date.split("/");

			if (date[1] == currentMonth) {
				monthTime = monthTime + item.time;
			}
		});

		// total
		let totalTime = oldActivities.map(a => a.time);
		totalTime = totalTime.reduce((a, b) => a + b);

		this.setState({
			weekTime: parseTime(weekTime),
			monthTime: parseTime(monthTime),
			totalTime: parseTime(totalTime),
		});
	};

	render() {
		const { weekData, monthData, loading, currentPage } = this.state;
		const { weekTime, monthTime, totalTime } = this.state;

		return (
			<View style={{ flex: 1 }}>
				<HomeHeader />
				<ScrollView style={{ backgroundColor: "#111" }}>
					<Container>
						<PageTitleLight>Estatísticas</PageTitleLight>

						<Badge dark={true}>Geral</Badge>
						<StatsRow
							week={weekTime ? weekTime : "00:00:00"}
							month={monthTime ? monthTime : "00:00:00"}
							total={totalTime ? totalTime : "00:00:00"}
						/>

						<Badge dark={true}>Gráfico</Badge>

						<Row style={{ marginBottom: 30, justifyContent: "flex-start" }}>
							<SectionButton
								onPress={() => this.setState({ currentPage: 1 })}
								active={this.state.currentPage === 1}
							>
								<ButtonText>Semana</ButtonText>
							</SectionButton>

							<SectionButton
								onPress={() => this.setState({ currentPage: 2 })}
								active={this.state.currentPage === 2}
							>
								<ButtonText>Mês</ButtonText>
							</SectionButton>
						</Row>
					</Container>

					{currentPage === 1 && (
						<BarChart
							data={
								currentPage === 1
									? loading
										? [0, 0, 0, 0, 0, 0, 0]
										: weekData
									: [0, 0, 0, 0, 0, 0, 0]
							}
							style={{ width: Dimensions.get("window").width - 60 }}
						/>
					)}

					{currentPage === 2 && (
						<MonthChart
							data={currentPage === 2 ? (loading ? [] : monthData) : []}
						/>
					)}

					<Container>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("History")}
						>
							<Row>
								<Icon
									name="chevron-down"
									type="feather"
									size={38}
									color="#fff"
								/>
							</Row>
						</TouchableOpacity>
					</Container>
				</ScrollView>
			</View>
		);
	}
}
