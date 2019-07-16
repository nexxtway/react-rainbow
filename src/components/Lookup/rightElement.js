import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';

export default function RightElement({ showCloseButton, onClear, icon, closeIcon, ...rest }) {
    if (showCloseButton) {
        return (
            <span className="rainbow-lookup_input-close-button-container">
                <ButtonIcon
                    assistiveText="close"
                    size="small"
                    title="close"
                    icon={closeIcon}
                    onClick={onClear}
                    {...rest}
                />
            </span>
        );
    }
    return <span className="rainbow-lookup_input-icon">{icon}</span>;
}

RightElement.propTypes = {
    icon: PropTypes.node,
    showCloseButton: PropTypes.bool,
    onClear: PropTypes.func,
};

RightElement.defaultProps = {
    icon: undefined,
    showCloseButton: false,
    onClear: () => {},
};
