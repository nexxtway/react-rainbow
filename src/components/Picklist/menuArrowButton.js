import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function MenuArrowButton(props) {
    const { arrow } = props;
    const className = classnames(
        'rainbow-picklist_dropdown-arrow-button',
        `rainbow-picklist_dropdown-arrow-${arrow}`,
    );

    return <div className={className} />;
}

MenuArrowButton.propTypes = {
    arrow: PropTypes.oneOf(['up', 'down']).isRequired,
    // onHover: PropTypes.func.isRequired,
};
