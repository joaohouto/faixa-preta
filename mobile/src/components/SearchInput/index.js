import React from "react";

import { Icon } from "react-native-elements";

import { InputBox, InputElement, IconContainer } from "./styles";

const SearchInput = ({
	dark,
	onChangeText,
	onSearch,
	onDismiss,
	showSearch,
	...rest
}) => {
	return (
		<InputBox>
			<InputElement
				onChangeText={onChangeText}
				style={{
					backgroundColor: dark ? "#333" : "#f1f1f1",
					color: !dark ? "#999" : "#f1f1f1",
				}}
				placeholderTextColor="#999"
				{...rest}
			/>

			{showSearch ? (
				<IconContainer onPress={onSearch}>
					<Icon
						name="search"
						type="feather"
						size={17}
						color={dark ? "#ddd" : "#111"}
					/>
				</IconContainer>
			) : (
				<IconContainer onPress={onDismiss}>
					<Icon
						name="x"
						type="feather"
						size={17}
						color={dark ? "#ddd" : "#111"}
					/>
				</IconContainer>
			)}
		</InputBox>
	);
};

export default SearchInput;
