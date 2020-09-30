import React from 'react';

import { InputBox, InputElement, InputLabel } from './styles';

const Textarea = ({ label, ...rest }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <InputElement {...rest} />
        </InputBox>
    );
}

export default Textarea;