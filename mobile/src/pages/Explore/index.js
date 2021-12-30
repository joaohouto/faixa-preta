import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

import { dismissActivityNotification } from "../../services/notifications";
import ActivityService from "../../services/activity";

import backgroundImg from "../../assets/images/activityBackground.png";

import HomeHeader from "../../components/HomeHeader";
import Badge from "../../components/Badge";

import { Row, PageTitleLight, SimpleTextLight } from "../../components/Global";
import {
	Scroll,
	LittleContainer,
	ContainerLight,
	LittleCard,
	BigCard,
	FifityFiveView,
	HorizontalRow,
	DarkButton,
	DarkButtonText,
} from "./styles.js";

import kihonImg from "../../assets/images/kihon.png";
import kataImg from "../../assets/images/kata.png";
import kumiteImg from "../../assets/images/kumite.png";
import exameImg from "../../assets/images/exame.png";

const Explore = ({ navigation }) => {
	useEffect(() => {
		dismissActivityNotification();

		const fakeData = async () => {

			const data = [
				{
					date: "01/06/2021",
					time: 1800000,
					name: "Treino livre",
				},
				{
					date: "02/06/2021",
					time: 900000,
					name: "Faixa Preta",
				},
				{
					date: "03/06/2021",
					time: 2340000,
					name: "Chutes III",
				},
				{
					date: "04/06/2021",
					time: 1380000,
					name: "Treino livre",
				},
				{
					date: "07/06/2021",
					time: 2700000,
					name: "Treino livre",
				},
				{
					date: "09/06/2021",
					time: 1800000,
					name: "Faixa Marrom",
				},
				{
					date: "11/06/2021",
					time: 3300000,
					name: "Série Superiores",
				},
				{
					date: "13/06/2021",
					time: 1080000,
					name: "Defesas II",
				}
			]

			for (const item of data) {
				await ActivityService.create(item);
				console.log('done!\n')
			}
		}

	}, []);

	return (
		<>
			<HomeHeader />
			<Scroll>
				<ContainerLight
					source={backgroundImg}
					style={{ resizeMode: "contain" }}
					imageStyle={{ opacity: 0.3 }}
				>
					<Row style={{ justifyContent: "space-between", flex: 1 }}>
						<Row style={{ flexDirection: "column", alignItems: "flex-start" }}>
							<PageTitleLight>Explorar</PageTitleLight>
						</Row>

						<TouchableOpacity onPress={() => navigation.navigate("Help")}>
							<Icon name="help-circle" type="feather" size={24} color="#777" />
						</TouchableOpacity>
					</Row>

					<SimpleTextLight>
						Procure por treinos já prontos ou monitore o seu tempo em um treino livre.
					</SimpleTextLight>

					<DarkButton
						onPress={() => navigation.navigate("FreeActivityRunning")}
					>
						<Icon name="plus-circle" type="feather" size={24} color="#999" />

						<DarkButtonText>TREINO LIVRE</DarkButtonText>
					</DarkButton>
				</ContainerLight>

				<LittleContainer>
					<Badge dark={true}>Fundamental</Badge>
				</LittleContainer>

				<HorizontalRow horizontal={true}>
					<TouchableOpacity
						style={{ marginLeft: 30 }}
						onPress={() =>
							navigation.navigate("ActivityList", { tag: "Kihon" })
						}
					>
						<LittleCard source={kihonImg} />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("ActivityList", { tag: "Kata" })}
					>
						<LittleCard source={kataImg} />
					</TouchableOpacity>

					<TouchableOpacity
						style={{ marginRight: 30 }}
						onPress={() =>
							navigation.navigate("ActivityList", { tag: "Kumite" })
						}
					>
						<LittleCard source={kumiteImg} />
					</TouchableOpacity>
				</HorizontalRow>

				<LittleContainer>
					<Badge dark={true}>Recomendado</Badge>

					<TouchableOpacity
						onPress={() =>
							navigation.navigate("ActivityList", { tag: "Exame" })
						}
					>
						<BigCard source={exameImg} />
					</TouchableOpacity>

					<FifityFiveView />
				</LittleContainer>
			</Scroll>
		</>
	);
};

export default Explore;
