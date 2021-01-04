import styled from 'styled-components'

export const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Header = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Row = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Year = styled.Text`
    color: #999;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Month = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const Week = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Day = styled.View`
    width: 34px;
    height: 34px;
    margin: 4px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const DayText = styled.Text`
    color: ${p => p.active ? '#fff' : '#999'};
    font-weight: bold;
    font-size: 12px;
`;

export const Light = styled.View`
    width: ${p => p.size}px;
    height: ${p => p.size}px;

    border-radius: 100px;
    background: rgba(255,255,255,0.1);
    position: absolute;
    top: 17px;
    left: 17px;
    transform: ${p => 'translate(-'+p.size/2+'px, -'+p.size/2+'px)'};
`;

export const Fill = styled.View`
    width: 100%;
    height: 210px;
`;