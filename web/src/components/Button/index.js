import React from 'react';

import { ButtonElement, Spin } from './styles';

const Button = ({ children, isLoading, ...rest }) => {
    return (
        <ButtonElement 
            style={{ 
                opacity: isLoading ? 0.6 : 1,  
                cursor: isLoading ? 'not-allowed' : 'pointer',
                pointerEvents: isLoading ? 'none' : 'all'
            }}
            {...rest}
        >
            { isLoading ? <Spin /> : children }
        </ButtonElement>
    );
}

export default Button;