import React, { useEffect, useRef } from 'react';
import { useField } from "@unform/core";

import { InputBox, InputElement, InputLabel, WarningText } from './styles';

const Input = ({ label, name, ...rest }) => {
    const inputRef = useRef(null);
	const { fieldName, defaultValue, error, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
		});
	}, [fieldName, registerField]);

    return (
        <InputBox>
            {error && <WarningText>{error}</WarningText>}
            <InputLabel>{label}</InputLabel>
            <InputElement 
                ref={inputRef}
                defaultValue={defaultValue}
                isErrored={!!error}
                name={name}
                {...rest}
            />
        </InputBox>
    );
}

export default Input;