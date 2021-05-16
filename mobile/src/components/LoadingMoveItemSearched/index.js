import React, { Component } from "react";

import { Animated, Easing } from "react-native";
import { Row, Title, Tags, MoveImage, Section } from "./styles";

class LoadingMoveItemSearched extends Component {
	state = {
		fadeAnim: new Animated.Value(0),
	};

	componentDidMount = () => {
		Animated.loop(
			Animated.timing(this.state.fadeAnim, {
				useNativeDriver: true,
				toValue: 0.5,
				duration: 1000,
				easing: Easing.bounce,
				friction: 1,
			})
		).start();
	};

	render() {
		return (
			<Animated.View style={{ opacity: this.state.fadeAnim }}>
				<Row>
					<MoveImage />
					<Section>
						<Title></Title>
						<Tags></Tags>
					</Section>
				</Row>
				<Row>
					<MoveImage />
					<Section>
						<Title></Title>
						<Tags></Tags>
					</Section>
				</Row>
				<Row>
					<MoveImage />
					<Section>
						<Title></Title>
						<Tags></Tags>
					</Section>
				</Row>
				<Row>
					<MoveImage />
					<Section>
						<Title></Title>
						<Tags></Tags>
					</Section>
				</Row>
			</Animated.View>
		);
	}
}

export default LoadingMoveItemSearched;
