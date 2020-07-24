import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import { useFixFocusClick } from '../../libs/hooks';

export default function Button(props) {
    const { page, ariaCurrent, ariaLabel, isActivePage, onChange } = props;
    const buttonRef = useRef();

    useFixFocusClick(buttonRef);

    return (
        <StyledButton
            ref={buttonRef}
            isActivePage={isActivePage}
            onClick={event => onChange(event, page)}
            aria-current={ariaCurrent}
            aria-label={ariaLabel}
        >
            <span>{page}</span>
        </StyledButton>
    );
}

Button.propTypes = {
    isActivePage: PropTypes.bool,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    ariaCurrent: PropTypes.string,
    ariaLabel: PropTypes.string,
};

Button.defaultProps = {
    isActivePage: false,
    ariaCurrent: undefined,
    ariaLabel: undefined,
};
