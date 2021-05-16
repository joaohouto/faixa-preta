import React, { Component } from "react";
import { Linking } from "react-native";
import Markdown from "react-native-simple-markdown";

import { getLinkPreview } from "link-preview-js";

import CustomHeader from "../../components/CustomHeader";
import ActivityItem from "../../components/ActivityItem";
import LoadingActivityItem from "../../components/LoadingActivityItem";

import { ContainerLight, Row } from "../../components/Global";
import {
	Label,
	Details,
	ImageBox,
	Title,
	Category,
	FifityFiveView,
} from "./styles";

class Move extends Component {
	state = {
		move: {},
		videos: [],
		loading: true,
	};

	componentDidMount() {
		this.loadMove();
	}

	loadMove = async () => {
		const { move } = this.props.route.params;
		await this.setState({ move });

		const { videoUrl } = this.state.move;

		for (const url of videoUrl) {
			if (url !== "default") {
				const data = await getLinkPreview("https://youtube.com/watch?v=" + url.replace("https://youtube.com/watch?v=", ""));

				this.setState({
					videos: this.state.videos.concat([
						{ title: data.title, description: data.description, id: url.replace("https://youtube.com/watch?v=", "") },
					]),
				});
			}
		}

		this.setState({ loading: false });
	};

	render() {
		const { move, videos, loading } = this.state;

		const markdownStyles = {
			plainText: {
				fontSize: 14,
				color: "#555",
				fontFamily: "Roboto-Regular",
			},
			em: {
				fontSize: 14,
				color: "#555",
				fontFamily: "Roboto-Regular",
			},
			text: {
				fontSize: 14,
				color: "#555",
				fontFamily: "Roboto-Regular",
			},
			strong: {
				color: "#555",
				fontFamily: "Roboto-Bold",
			},
			link: {
				color: "#0071BC",
				fontFamily: "Roboto-Bold",
			}
		};

		return (
			<>
				<CustomHeader icon="arrow-left" navigation={this.props.navigation} />
				<ContainerLight>
					<ImageBox
						style={{
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							borderTopRightRadius: 20,
							borderTopLeftRadius: 20,
							overflow: "hidden",
							borderRadius: 20,
						}}
						source={{ uri: move.imageUrl }}
					/>

					<Category>{move.category}</Category>
					<Title>{move.name}</Title>

					<Markdown styles={markdownStyles}>{move.details}</Markdown>

					<Label style={{ marginTop: 30 }}>Vídeos</Label>

					{!loading ? (
						videos.map(video => (
							<ActivityItem
								key={video.id}
								name={video.title.slice(0, 15) + "..."}
								tags={[video.description.slice(0, 30) + "..."]}
								source={{
									uri:
										"https://img.youtube.com/vi/" + video.id + "/mqdefault.jpg",
								}}
								onPress={() =>
									Linking.openURL("https://www.youtube.com/watch?v=" + video.id)
								}
							/>
						))
					) : (
						<LoadingActivityItem />
					)}

					<FifityFiveView />
				</ContainerLight>
			</>
		);
	}
}

export default Move;
