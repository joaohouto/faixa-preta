import React from 'react';

import { Row, Title, Tags, MoveImage, Section, Day, Month, Year } from './styles';

const MoveItemSearched = ({ name, date, time, ...rest }) => {

    let fullDate = date.split('/');
    
    const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

    fullDate[1] = months[fullDate[1] - 1];

    const parseTime = (timerTime) => {
        const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return hours + ':' + minutes + ':' + seconds;
    }

    return (
        <Row>
            <MoveImage>
                <Month>{fullDate[1]}</Month>
                <Day>{fullDate[0]}</Day>
                <Year>{fullDate[2]}</Year>
            </MoveImage>
            <Section>
                <Title>{name}</Title>
                <Tags>Duração: {parseTime(time)}</Tags>
            </Section>
        </Row>
    );
}

export default MoveItemSearched;