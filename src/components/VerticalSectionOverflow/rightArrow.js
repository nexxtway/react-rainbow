import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import arrowIcon from '../../../assets/images/angle-down.svg';

export default function RightArrow({ isExpanded }) {
    const getArrowClassName = () => classnames(
            'rainbow-vertical-section-overflow_icon',
            'rainbow-vertical-section-overflow_icon--right',
            { 'rainbow-vertical-section-overflow-icon--expanded': isExpanded },
            );

    return (
        <img
            className={getArrowClassName()}
            src={arrowIcon}
            alt="right arrow icon" />
    );
}

RightArrow.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
};
