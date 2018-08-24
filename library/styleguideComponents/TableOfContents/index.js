import React from 'react';
import PropTypes from 'prop-types';
import Input from './../../../src/components/Input';

export default function TableOfContents({ children, searchTerm, onSearchTermChange }) {
    return (
        <div>
            <div className="slds-p-vertical_medium slds-p-horizontal_small">
                <Input
                    iconName="utility:search"
                    value={searchTerm}
                    placeholder="Filter by name"
                    aria-label="Filter by name"
                    onChange={event => onSearchTermChange(event.target.value)} />

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
