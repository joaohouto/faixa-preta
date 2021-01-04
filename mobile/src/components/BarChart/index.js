import React, { useState, useEffect } from 'react';

import { parseTime } from '../../services/calendar';
import { roundNumber } from '../../services/number';

import { 
    Container, 
    FirstRow, 
    SecondRow, 
    SectionLeft, 
    SectionRight, 
    Section, 
    LeftLabel, 
    Overlay, 
    Line, 
    SectionBlank, 
    SectionBottom, 
    BottomLabel, 
    Column 
} from './styles';

const BarChart = ({ data, ...rest }) => {

    const newValues = data.map(time => {
        let onlyMinutes = parseTime(time);
        onlyMinutes = onlyMinutes.split(':');
        
        onlyMinutes = (onlyMinutes[0] * 60) + (onlyMinutes[1] * 1) + (onlyMinutes[2] / 60);
        onlyMinutes = roundNumber(onlyMinutes, 2);

        return onlyMinutes
    });


    let max = newValues.reduce((a, b) => Math.max(a, b));

    let halfPlusQuarter = max * 0.75;
    let half = max * 0.5;
    let quarter = max * 0.25;

    let columnsHeight = newValues.map(value =>  value * (100 / max));

    return (
        <Container {...rest}>
            
            <FirstRow>
                <SectionLeft>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#222' }}>
                        <LeftLabel>{roundNumber(max, 2)}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#222' }}>
                        <LeftLabel>{roundNumber(halfPlusQuarter, 2)}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#222' }}>
                        <LeftLabel>{roundNumber(half, 2)}min</LeftLabel>
                    </Section>
                    <Section style={{ borderTopWidth: 2, borderTopColor: '#222' }}>
                        <LeftLabel>{roundNumber(quarter, 2)}min</LeftLabel>
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