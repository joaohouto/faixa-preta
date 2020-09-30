import React from 'react';

import { InputBox, InputElement, InputLabel } from './styles';

const Input = ({ label, ...rest }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <InputElement {...rest} />
        </InputBox>
    );
}

export default Input;