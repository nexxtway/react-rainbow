import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import ButtonIcon from '../ButtonIcon';
import CloseIcon from './icons/closeIcon';

export default function RightElement({ showCloseButton, onClear, searchIcon }) {
    if (showCloseButton) {
        return (
            <span className="rainbow-lookup_input-close-button-container">
                <ButtonIcon
                    assistiveText="close"
                    size="small"
                    title="close"
                    tabIndex={-1}
                    icon={<CloseIcon />}
                    onClick={onClear}
                />
            </span>
        );
    }
    return <span className="rainbow-lookup_input-icon">{searchIcon}</span>;
}

RightElement.propTypes = {
    searchIcon: PropTypes.node,
    showCloseButton: PropTypes.bool,
    onClear: PropTypes.func,
};

RightElement.defaultProps = {
    searchIcon: <SearchIcon />,
    showCloseButton: false,
    onClear: () => {},
};
