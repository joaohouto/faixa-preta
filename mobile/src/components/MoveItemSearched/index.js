import React from 'react';

import { Row, Title, Tags, MoveImage, Section } from './styles';

const MoveItemSearched = ({ name, category, source, ...rest }) => {
    return (
        <Row>
            <MoveImage source={source} 
                style={{ 
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    overflow: 'hidden' 
                }} 
            />
            <Section>
                <Title>{name}</Title>
                <Tags>{category}</Tags>
            </Section>
        </Row>
    );
}

export default MoveItemSearched;