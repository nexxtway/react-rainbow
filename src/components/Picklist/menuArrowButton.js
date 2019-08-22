import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function MenuArrowButton(props) {
    const { arrow, onMouseEnter, onMouseLeave } = props;
    const className = classnames(
        'rainbow-picklist_dropdown-arrow-button',
        `rainbow-picklist_dropdown-arrow-${arrow}`,
    );

    return <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />;
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
