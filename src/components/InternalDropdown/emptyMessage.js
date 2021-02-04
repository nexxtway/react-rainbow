import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import { MessageContainer, MessageDescription, MessageHighLight } from './styled';
import RenderIf from '../RenderIf';

export default function EmptyMessage({ searchValue, hasTimeout }) {
    const hasSearch = searchValue && !hasTimeout;
    const message = hasSearch
        ? 'Our robots did not find any match for:'
        : 'Type something to search';
    return (
        <MessageContainer data-id="internal-dropdown-empty-message">
            <SearchIcon />
            <MessageDescription>{message}</MessageDescription>
            <RenderIf isTrue={hasSearch}>
                <MessageHighLight> “{searchValue}”</MessageHighLight>
            </RenderIf>
        </MessageContainer>
    );
}

EmptyMessage.propTypes = {
    searchValue: PropTypes.string,
    hasTimeout: PropTypes.bool,
};

EmptyMessage.defaultProps = {
    searchValue: undefined,
    hasTimeout: false,
};
