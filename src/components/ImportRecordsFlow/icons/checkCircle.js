import React from 'react';
import PropTypes from 'prop-types';

export default function CheckCircle(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g clip-path="url(#clip0_661_16708)">
                <path
                    d="M14.6668 8.22121V8.83455C14.666 10.2722 14.2005 11.671 13.3397 12.8224C12.4789 13.9739 11.269 14.8162 9.8904 15.2238C8.51178 15.6314 7.03834 15.5825 5.68981 15.0843C4.34128 14.5861 3.18993 13.6653 2.40747 12.4593C1.62501 11.2532 1.25336 9.82659 1.34795 8.39209C1.44254 6.95759 1.9983 5.5921 2.93235 4.49926C3.8664 3.40642 5.12869 2.6448 6.53096 2.32798C7.93322 2.01115 9.40034 2.1561 10.7135 2.74121"
                    stroke="#20D573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.6667 3.5L8 10.1733L6 8.17333"
                    stroke="#20D573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_661_16708">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.833984)" />
                </clipPath>
            </defs>
        </svg>
    );
}

CheckCircle.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

CheckCircle.defaultProps = {
    style: undefined,
    className: undefined,
};
