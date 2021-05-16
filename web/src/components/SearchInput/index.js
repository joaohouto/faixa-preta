import React from 'react';

import { IconSearch } from 'tabler-icons';

import { InputBox, InputElement, IconContainer } from './styles';

const SearchInput = ({ label, dark, onClick, onDismiss, searched, value, ...rest }) => {
    return (
        <InputBox>
            <InputElement value={value} {...rest} />
            
            <IconContainer type="submit" onClick={onClick}>
                <IconSearch style={{ margin: 10, marginRight: 30, cursor: 'pointer' }} size={20} color="#222" />
            </IconContainer>
        </InputBox>
    );
}

export default SearchInput;