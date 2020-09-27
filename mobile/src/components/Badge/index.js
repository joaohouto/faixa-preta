import React from 'react';

import { BadgeElement, Row } from './styles';

const Badge = ({ children, dark, ...rest }) => {
    return (
        <Row>
            <BadgeElement style={{ color: dark ? "#111" : "#fff" }} {...rest} >
                {children}
            </BadgeElement>
        </Row>
    );
}

export default Badge;