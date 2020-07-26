import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import { MessageContainer, MessageDescription, MessageHighLight } from './styled';

export default function EmptyMessage({ searchValue }) {
    return (
        <MessageContainer>
            <SearchIcon />
            <MessageDescription>Our robots did not find any match for:</MessageDescription>
            <MessageHighLight> “{searchValue}”</MessageHighLight>
        </MessageContainer>
    );
}

EmptyMessage.propTypes = {
    searchValue: PropTypes.string,
};

EmptyMessage.defaultProps = {
    searchValue: undefined,
};
