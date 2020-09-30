import React from 'react';
import { Link } from 'react-router-dom'

import { Row, Title, Tags, ActivityImage, Section, Options, Button } from './styles';

const ActivityItem = ({ name, tags, onEdit, onDelete, children, ...rest }) => {
    return (
        <Row>
            <ActivityImage {...rest} />
            <Section>
                <Title><Link to={onEdit}>{name}</Link></Title>
                <Tags>
                    { tags && tags.map((tag, index) => {
                        return index < tags.length-1 ? tag + " - " : tag
                    }) }
                </Tags>
                {children}
            </Section>
            <Options>
                <Button onClick={onDelete} style={{ background: '#EE6666' }}></Button>
            </Options>
        </Row>
    );
}

export default ActivityItem;