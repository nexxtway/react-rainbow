import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import arrowIcon from '../../../assets/images/angle-down.svg';

export default function RightArrow({ isExpanded }) {
    const getArrowClassName = () => classnames(
            'rainbow-nav-vertical-section-overflow__icon',
            'rainbow-nav-vertical-section-overflow__icon_right',
            { 'rainbow-nav-vertical-section-overflow__icon_expanded': isExpanded },
            );

    return (
        <img
            className={getArrowClassName()}
            src={arrowIcon}
            alt="arrow icon" />
    );
}

RightArrow.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
};
