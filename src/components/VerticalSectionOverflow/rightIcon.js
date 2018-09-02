import React from 'react';
import PropTypes from 'prop-types';

export default function RightIcon(props) {
    const { icon, className } = props;
    if (icon) {
        return (
            <span className={className}>{icon}</span>
        );
    }
    return null;
}

RightIcon.propTypes = {
    icon: PropTypes.node,
    className: PropTypes.string,
};

RightIcon.defaultProps = {
    icon: null,
    className: '',
};

