import React from 'react';
import PropTypes from 'prop-types';

export default function LeftIcon(props) {
    const { icon, className } = props;
    if (icon) {
        return (
            <span className={className}>{icon}</span>
        );
    }

    return null;
}

LeftIcon.propTypes = {
    icon: PropTypes.node,
    className: PropTypes.string,
};

LeftIcon.defaultProps = {
    icon: null,
    className: '',
};

