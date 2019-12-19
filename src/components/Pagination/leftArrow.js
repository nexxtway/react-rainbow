import React from 'react';
import PropTypes from 'prop-types';

export default function LeftArrow({ className }) {
    return (
        <svg
            fill="currentColor"
            width="6.46px"
            height="10px"
            viewBox="0 0 6.46 10"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M0.239130435,4.47204969 L4.46273292,0.248447205 C4.75465839,-0.0434782609 5.22670807,-0.0434782609 5.51552795,0.248447205 L6.2173913,0.950310559 C6.50931677,1.24223602 6.50931677,1.71428571 6.2173913,2.00310559 L3.22670807,5 L6.22049689,7.99378882 C6.51242236,8.28571429 6.51242236,8.75776398 6.22049689,9.04658385 L5.51863354,9.7515528 C5.22670807,10.0434783 4.75465839,10.0434783 4.46583851,9.7515528 L0.242236025,5.52795031 C-0.0527950311,5.23602484 -0.0527950311,4.76397516 0.239130435,4.47204969 Z" />
        </svg>
    );
}

LeftArrow.propTypes = {
    className: PropTypes.string,
};

LeftArrow.defaultProps = {
    className: undefined,
};
