import React, { Component } from "react";

import { Animated, Easing } from "react-native";
import { Row, Title, Tags, MoveImage, Section, Label } from "./styles";

class LoadingMoveItem extends Component {
	state = {
		fadeAnim: new Animated.Value(0),
	};

	componentDidMount = () => {
		Animated.loop(
			Animated.timing(this.state.fadeAnim, {
				useNativeDriver: true,
				toValue: 0.1,
				duration: 500,
				easing: Easing.bounce,
				friction: 1,
			})
		).start();
	};

	render() {
		return (
			<Animated.View style={{ opacity: this.state.fadeAnim }}>
				<Label />

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

export default LoadingMoveItem;
