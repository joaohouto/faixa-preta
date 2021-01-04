import React, { useEffect, useState } from 'react';

import { gerarCalendario, getDate, nextMonth, previousMonth } from '../../services/calendar';

import { 
    Container, 
    Header, 
    Row,
    Year,
    Fill, 
    Month,
    Week,
    Day,
    DayText,
    Light
} from './styles';

const MonthChart = ({ data }) => {
    
    const date = getDate().split('/');
    const calendar = gerarCalendario(date[2], date[1]);

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return (
        <Container>
            <Row>
                <Year>{date && date[2]}</Year>
            </Row>

            <Header>
                <Month>{months[date[1] - 1]}</Month>
            </Header>

            { !calendar && (
                <Fill />
            ) }

            <Week>
                { calendar && calendar[0].map((day, index) => day.split('/').splice(0, 1) < 8 ? (
                    <Day>
                        <DayText>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[0][index].time) * 0.85} />
                    </Day>
                ) : <Day />) }
            </Week>

            <Week>
                { calendar && calendar[1].map((day, index) => (
                    <Day>
                        <DayText>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[1][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar && calendar[2].map((day, index) => (
                    <Day>
                        <DayText>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[2][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar && calendar[3].map((day, index) => (
                    <Day>
                        <DayText>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[3][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar && calendar[4].map((day, index) => !(day.split('/').splice(0, 1) < 7) ? (
                    <Day>
                        <DayText>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[4][index].time) * 0.85} />
                    </Day>
                ) : <Day />) }
            </Week>

            
        </Container>
    );
}

export default MonthChart;