import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Splash({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#111",
			}}
		>
			<LottieView
				autoPlay
				loop={false}
				style={{
					width: 150,
					height: 150,
				}}
				source={require("../../assets/logo.json")}
				onAnimationFinish={() => {
					navigation.reset({
						index: 0,
						routes: [{ name: "BottomTabs" }],
					});
				}}
			/>
		</View>
	);
}
