import React from 'react';
import PropTypes from 'prop-types';
import StyledArrowButton from './styled/arrowButton';

export default function MenuArrowButton(props) {
    const { arrow, onMouseEnter, onMouseLeave } = props;

    return (
        <StyledArrowButton
            data-id={`lookup-arrow-button-${arrow}`}
            arrow={arrow}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
}

MenuArrowButton.propTypes = {
    arrow: PropTypes.oneOf(['up', 'down']).isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

MenuArrowButton.defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};
