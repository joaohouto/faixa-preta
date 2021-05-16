import React, { useState } from "react";
import { Animated, View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Row } from "../../components/Global";
import { DragLine } from "./styles";

const BottomDrawer = ({ children }) => {
	const [open, setOpen] = useState();
	const [y, setY] = useState(new Animated.Value(0));

	const styles = StyleSheet.create({
		BottomContainer: {
			width: "100%",
			height: "100%",
			backgroundColor: "#111",
			paddingHorizontal: 30,
			borderTopRightRadius: 40,
			borderTopLeftRadius: 40,

			position: "absolute",
			top: Dimensions.get("window").height - 255,
		},
	});

	const toggleDrawer = () => {
		if (open) {
			closeDrawer();
			setOpen(false);
		} else {
			openDrawer();
			setOpen(true);
		}
	};

	const openDrawer = () => {
		Animated.spring(y, {
			toValue: -Dimensions.get("window").height * 0.55,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const closeDrawer = () => {
		Animated.spring(y, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Animated.View
			style={[styles.BottomContainer, { transform: [{ translateY: y }] }]}
		>
			<Row>
				<TouchableOpacity
					style={{ height: 42, paddingHorizontal: 200 }}
					onPress={toggleDrawer}
				>
					<DragLine />
				</TouchableOpacity>
			</Row>

			{children}
		</Animated.View>
	);
};

export default BottomDrawer;
