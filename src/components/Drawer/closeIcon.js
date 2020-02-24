import React from 'react';
import PropTypes from 'prop-types';

export default function CloseIcon(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="21px"
            height="16px"
            viewBox="0 0 21 16"
        >
            <path d="M13.81.21c-.28-.28-.732-.28-1.011-.001-.28.278-.28.73-.001 1.01l6.052 6.066H.714c-.361 0-.66.27-.707.618L0 8c0 .395.32.714.714.714H18.85l-6.052 6.067c-.251.252-.276.643-.074.922l.075.088c.14.14.322.209.504.209.184 0 .367-.07.506-.21l6.26-6.275c.835-.835.835-2.195 0-3.03z" />
        </svg>
    );
}

CloseIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

CloseIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
