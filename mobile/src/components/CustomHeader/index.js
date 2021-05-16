import React from "react";

import { Icon } from "react-native-elements";
import { Header, BackWrapper } from "./styles";

const CustomHeader = ({ navigation, icon, dark }) => {
	return (
		<Header style={{ backgroundColor: dark && "#222" }}>
			<BackWrapper onPress={() => navigation.goBack()}>
				<Icon name={icon} type="feather" size={24} color="#999" />
			</BackWrapper>
		</Header>
	);
};

export default CustomHeader;
