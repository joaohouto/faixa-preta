import React from 'react';

import { InputBox, InputElement, IconContainer, Icon } from './styles';
import searchIconDark from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/x.svg';

const SearchInput = ({ label, dark, onClick, onDismiss, searched, value, ...rest }) => {
    return (
        <InputBox>
            <InputElement style={{ backgroundColor: dark ? '#333' : '#f1f1f1' }} value={value} {...rest} />
            
            <IconContainer onClick={onClick}>
                <Icon src={searchIconDark} />
            </IconContainer>
        </InputBox>
    );
}

export default SearchInput;