import React, { Component } from "react";
import { Linking } from "react-native";

import { getLinkPreview } from "link-preview-js";

import CustomHeader from "../../components/CustomHeader";
import Badge from "../../components/Badge";
import VideoItem from "../../components/VideoItem";
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
				const data = await getLinkPreview(
					"https://youtube.com/watch?v=" +
						url.replace("https://youtube.com/watch?v=", "")
				);

				this.setState({
					videos: this.state.videos.concat([
						{
							title: data.title,
							description: data.description,
							id: url.replace("https://youtube.com/watch?v=", ""),
						},
					]),
				});
			}
		}

		this.setState({ loading: false });
	};

	render() {
		const { move, videos, loading } = this.state;

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

					<Badge>{move.category}</Badge>

					<Title>{move.name}</Title>

					<Details>{move.details}</Details>

					<Badge>YouTube</Badge>

					{!loading ? (
						videos.map(video => (
							<VideoItem
								key={video.id}
								name={video.title}
								tags={[video.description]}
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
