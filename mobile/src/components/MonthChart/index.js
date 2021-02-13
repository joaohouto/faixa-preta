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

    const initialDate = getDate();
    
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
                { calendar[0]?.map((day, index) => day.split('/').splice(0, 1) < 8 ? (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[0][index].time) * 0.85} />
                    </Day>
                ) : <Day key={Math.random()} />) }
            </Week>

            <Week>
                { calendar[1]?.map((day, index) => (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[1][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar[2]?.map((day, index) => (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[2][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar[3]?.map((day, index) => (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[3][index].time) * 0.85} />
                    </Day>
                )) }
            </Week>

            <Week>
                { calendar[4]?.map((day, index) => !(day.split('/').splice(0, 1) < 7) ? (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[4][index].time) * 0.85} />
                    </Day>
                ) : <Day key={Math.random()} />) }
            </Week>

            <Week>
                { calendar[5]?.map((day, index) => !(day.split('/').splice(0, 1) < 7) ? (
                    <Day key={Math.random()}>
                        <DayText active={initialDate === day}>{day.split('/').splice(0, 1)}</DayText>
                        <Light size={data && (data[5][index].time) * 0.85} />
                    </Day>
                ) : <Day key={Math.random()} />) }
            </Week>

            
        </Container>
    );
}

export default MonthChart;