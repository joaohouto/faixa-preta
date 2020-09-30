import React from 'react';

import { BadgeElement, Row } from './styles';

const Badge = ({ value, dark, ...rest }) => {
    return (
        <Row>
            <BadgeElement style={{ color: dark ? "#111" : "#fff" }} {...rest} >
                {value}
            </BadgeElement>
        </Row>
    );
}

export default Badge;