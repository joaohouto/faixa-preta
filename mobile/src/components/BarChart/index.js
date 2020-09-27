import React from 'react';

import { Container, FirstRow, SecondRow, SectionLeft, SectionRight, Section, LeftLabel, Overlay, Line, SectionBlank, SectionBottom, BottomLabel, Column } from './styles';

const BarChart = ({ data, ...rest }) => {

    const max = data.reduce((a, b) => {
        return Math.max(a, b);
    });

    const halfPlusQuarter = max * 0.75;
    const half = max * 0.5;
    const quarter = max * 0.25;

    const columnsHeight = data.map(value => {
        return value * (100 / max)
    });

    return (
        <Container {...rest}>
            
            <FirstRow>
                <SectionLeft>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#333' }}>
                        <LeftLabel>{max}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#333' }}>
                        <LeftLabel>{halfPlusQuarter}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#333' }}>
                        <LeftLabel>{half}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#333' }}>
                        <LeftLabel>{quarter}min</LeftLabel>
                     </Section>
                </SectionLeft>
                <SectionRight>

                    <Overlay>
                        <Line style={{ borderTopWidth: 2, borderTopColor: '#222' }} />
                        <Line style={{ borderTopWidth: 2, borderTopColor: '#222' }} />
                        <Line style={{ borderTopWidth: 2, borderTopColor: '#222' }} />
                        <Line style={{ borderTopWidth: 2, borderTopColor: '#222' }} />
                    </Overlay>
                    
                    <Column style={{ height: columnsHeight[0] + '%' }} />
                    <Column style={{ height: columnsHeight[1] + '%' }} />
                    <Column style={{ height: columnsHeight[2] + '%' }} />
                    <Column style={{ height: columnsHeight[3] + '%' }} />
                    <Column style={{ height: columnsHeight[4] + '%' }} />
                    <Column style={{ height: columnsHeight[5] + '%' }} />
                    <Column style={{ height: columnsHeight[6] + '%' }} />

                </SectionRight>
            </FirstRow>

            <SecondRow>
                <SectionBlank style={{ borderTopWidth: 4, borderTopColor: '#222' }} />

                <SectionBottom style={{ borderTopWidth: 4, borderTopColor: '#222' }}>
                    <BottomLabel>DOM</BottomLabel>
                    <BottomLabel>SEG</BottomLabel>
                    <BottomLabel>TER</BottomLabel>
                    <BottomLabel>QUA</BottomLabel>
                    <BottomLabel>QUI</BottomLabel>
                    <BottomLabel>SEX</BottomLabel>
                    <BottomLabel>SÁB</BottomLabel>
                </SectionBottom>
            </SecondRow>
        </Container>
    );
}

export default BarChart;