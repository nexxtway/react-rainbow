import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import StyledCloseIcon from './styled/closeIcon';
import StyledCloseButton from './styled/closeButton';
import StyledInputIcon from './styled/inputIcon';

export default function RightElement({ showCloseButton, onClear, icon, error }) {
    if (showCloseButton) {
        return (
            <StyledCloseButton>
                <ButtonIcon
                    assistiveText="close"
                    size="small"
                    title="close"
                    tabIndex={-1}
                    icon={<StyledCloseIcon />}
                    onClick={onClear}
                />
            </StyledCloseButton>
        );
    }
    return <StyledInputIcon error={error}>{icon}</StyledInputIcon>;
}

RightElement.propTypes = {
    icon: PropTypes.node,
    showCloseButton: PropTypes.bool,
    onClear: PropTypes.func,
    error: PropTypes.node,
};

RightElement.defaultProps = {
    icon: undefined,
    showCloseButton: false,
    error: null,
    onClear: () => {},
};
