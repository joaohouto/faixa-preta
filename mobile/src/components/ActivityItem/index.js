import React from 'react';

import { Row, Title, Tags, ActivityImage, Section } from './styles';

const Button = ({ name, tags }) => {
    return (
        <Row>
            <ActivityImage />
            <Section>
                <Title>{name}</Title>
                <Tags>
                    { tags && tags.map((tag, index) => {
                        return index < tags.length-1 ? tag + " - " : tag
                    }) }
                </Tags>
            </Section>
        </Row>
    );
}

export default Button;