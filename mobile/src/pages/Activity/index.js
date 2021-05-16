import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import CustomHeader from "../../components/CustomHeader";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import MoveItem from "../../components/MoveItem";
import LoadingMoveItem from "../../components/LoadingMoveItem";

import { ContainerLight, PageTitleDark, Row } from "../../components/Global";
import {
	FifityFiveView,
	Details,
	WarningBox,
	WarningBoxText,
	Label,
	ButtonWrapper,
} from "./styles";

class Activity extends Component {
	state = {
		activity: {},
		kihonMoves: [],
		kataMoves: [],
		kumiteMoves: [],
		loading: true,
	};

	componentDidMount() {
		this.loadActivity();
	}

	loadActivity = async () => {
		const { activity } = this.props.route.params;
		this.setState({ activity });

    let kihonMoves = [];
    let kataMoves = [];
    let kumiteMoves = [];

		for (const move of activity.moves) {
      if (move.move_id.category === "Kihon")
				kihonMoves.push(move);

			if (move.move_id.category === "Kata")
				kataMoves.push(move);

			if (move.move_id.category === "Kumite")
				kumiteMoves.push(move);
    }

		this.setState({ loading: false, kihonMoves, kataMoves, kumiteMoves });
	};

	render() {
		const { activity, kihonMoves, kataMoves, kumiteMoves } = this.state;
		const { loading } = this.state;

		return (
			<>
				<CustomHeader icon="arrow-left" navigation={this.props.navigation} />
				<ContainerLight>
					<PageTitleDark>{activity.name}</PageTitleDark>

					<Row style={{ justifyContent: "flex-start" }}>
						{activity.tags &&
							activity.tags.map(tag => (
								<Badge dark={false} key={tag}>
									{tag}
								</Badge>
							))}
					</Row>

					<Details>{activity.details}</Details>

					<WarningBox>
						<Row style={{ justifyContent: "flex-start" }}>
							<Icon
								name="alert-triangle"
								type="feather"
								size={40}
								color="#D0D0D0"
							/>
							<WarningBoxText>
								Treine sempre em locais seguros e não exceda fisicamente os seus
								limites.
							</WarningBoxText>
						</Row>
					</WarningBox>

					{!loading && kihonMoves.length > 0 ? <Label>Kihon</Label> : <></>}

					{!loading ? (
						kihonMoves.length > 0 &&
						kihonMoves.map(move => (
							<TouchableOpacity
								key={move._id}
								onPress={() => this.props.navigation.navigate("Move", { move: move.move_id })}
							>
								<MoveItem
									name={move.move_id.name}
									repetitions={move.repetitions}
									source={{ uri: move.move_id.imageUrl }}
								/>
							</TouchableOpacity>
						))
					) : (
						<LoadingMoveItem />
					)}

					{!loading && kataMoves.length > 0 ? <Label>Kata</Label> : <></>}

					{!loading ? (
						kataMoves.length > 0 &&
						kataMoves.map(move => (
							<TouchableOpacity
								key={move._id}
								onPress={() => this.props.navigation.navigate("Move", { move: move.move_id })}
							>
								<MoveItem
									name={move.move_id.name}
									repetitions={move.repetitions}
									source={{ uri: move.move_id.imageUrl }}
								/>
							</TouchableOpacity>
						))
					) : (
						<></>
					)}

					{!loading && kumiteMoves.length > 0 ? <Label>Kumite</Label> : <></>}

					{!loading ? (
						kumiteMoves.length > 0 &&
						kumiteMoves.map(move => (
							<TouchableOpacity
								key={move._id}
								onPress={() => this.props.navigation.navigate("Move", { move: move.move_id })}
							>
								<MoveItem
									name={move.move_id.name}
									repetitions={move.move_id.repetitions}
									source={{ uri: move.imageUrl }}
								/>
							</TouchableOpacity>
						))
					) : (
						<></>
					)}

					<FifityFiveView />
				</ContainerLight>

				<ButtonWrapper>
					<Button
						onPress={() =>
							!loading &&
							this.props.navigation.navigate("ActivityRunning", {
								activity,
								kihonMoves,
								kataMoves,
								kumiteMoves,
							})
						}
					>
						Treinar
					</Button>
				</ButtonWrapper>
			</>
		);
	}
}

export default Activity;
