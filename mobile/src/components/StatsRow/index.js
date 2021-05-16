import React from "react";

import { Row, Section, Time, Desc } from "./styles";

const BarChart = ({ week, month, total }) => {
	return (
		<Row>
			<Section>
				<Time>{week}</Time>
				<Desc>NESTA SEMANA</Desc>
			</Section>

			<Section>
				<Time>{month}</Time>
				<Desc>NESTE MÊS</Desc>
			</Section>

			<Section>
				<Time>{total}</Time>
				<Desc>TOTAL</Desc>
			</Section>
		</Row>
	);
};

export default BarChart;
