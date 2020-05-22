import React from 'react';
import PropTypes from 'prop-types';
import StyledArrowButton from './styled/arrowButton';

export default function MenuArrowButton(props) {
    const { arrow, onMouseEnter, onMouseLeave, className } = props;

    return (
        <StyledArrowButton
            className={className}
            data-id={`picklist-arrow-button-${arrow}`}
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
    className: PropTypes.string,
};

MenuArrowButton.defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    className: undefined,
};
