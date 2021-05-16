import React, { useEffect } from "react";

import { Info, AlertCircle, CheckCircle } from "react-feather";

import { Container } from "./styles";
import { useToast } from "../../../hooks/toast";

const icons = {
	info: <Info size={30} />,
	error: <AlertCircle size={30} />,
	success: <CheckCircle size={30} />,
};

const Toast = ({ message }) => {
	const { removeToast } = useToast();

	useEffect(() => {
		const timer = setTimeout(() => removeToast(message.id), 5000);

		return () => clearTimeout(timer);
	}, [removeToast, message.id]);

	return (
		<Container
			id="toast"
			onClick={() => removeToast(message.id)}
			type={message.type}
		>
			<div>{icons[message.type || "info"]}</div>

			<div>
				<strong>{message.title}</strong>
				<p>{message.description}</p>
			</div>
		</Container>
	);
};

export default Toast;