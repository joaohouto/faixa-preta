import React from 'react';

import { ButtonElement } from './styles';

const Button = ({ children, ...rest }) => {
    return (
        <ButtonElement {...rest} >
            {children}
        </ButtonElement>
    );
}

export default Button;