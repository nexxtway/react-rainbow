/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from './../../../src/components/Input';

export default function TableOfContents({ children, searchTerm, onSearchTermChange }) {
    return (
        <div>
            <div className="rainbow-p-top_large rainbow-p-bottom_medium rainbow-p-horizontal_large">
                <Input
                    iconName="utility:search"
                    value={searchTerm}
                    placeholder="Filter by name"
                    aria-label="Filter by name"
                    onChange={event => onSearchTermChange(event.target.value)}
                    icon={
                        <FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />
                    } />

            </div>
            {children}
        </div>
    );
}

TableOfContents.propTypes = {
    children: PropTypes.node.isRequired,
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
};
