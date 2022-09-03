import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "react-native-elements";

import Explore from "./pages/Explore";
import MoveList from "./pages/MoveList";
import Statistics from "./pages/Statistics";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<Navigator
			screenOptions={{
				tabBarStyle: {
					height: 70,
					borderTopWidth: 0,
				},
				tabBarLabelStyle: {
					fontSize: 13,
					marginBottom: 10,
				},
				tabBarInactiveBackgroundColor: "#222222",
				tabBarActiveBackgroundColor: "#222222",
				tabBarInactiveTintColor: "#555555",
				tabBarActiveTintColor: "#dddddd",
			}}
		>
			<Screen
				name="Explore"
				component={Explore}
				options={{
					tabBarLabel: "Explorar",
					headerShown: false,
					unmountOnBlur: true,
					tabBarIcon: ({ color, size, focused }) => {
						return (
							<Icon
								name="compass"
								type="feather"
								size={24}
								color={focused ? "#ddd" : color}
							/>
						);
					},
				}}
			/>

			<Screen
				name="MoveList"
				component={MoveList}
				options={{
					tabBarLabel: "Pesquisar",
					headerShown: false,
					unmountOnBlur: true,
					tabBarIcon: ({ color, size, focused }) => {
						return (
							<Icon
								name="search"
								type="feather"
								size={24}
								color={focused ? "#ddd" : color}
							/>
						);
					},
				}}
			/>

			<Screen
				name="Statistics"
				component={Statistics}
				options={{
					tabBarLabel: "Estatísticas",
					headerShown: false,
					unmountOnBlur: true,
					tabBarIcon: ({ color, size, focused }) => {
						return (
							<Icon
								name="bar-chart"
								type="feather"
								size={24}
								color={focused ? "#ddd" : color}
							/>
						);
					},
				}}
			/>
		</Navigator>
	);
};

export default BottomTabs;
