import React from 'react';
import PropTypes from 'prop-types';

export default function XCircle(props) {
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
            <g clipPath="url(#clip0_661_16711)">
                <path
                    d="M8.00016 15.5013C11.6821 15.5013 14.6668 12.5165 14.6668 8.83463C14.6668 5.15274 11.6821 2.16797 8.00016 2.16797C4.31826 2.16797 1.3335 5.15274 1.3335 8.83463C1.3335 12.5165 4.31826 15.5013 8.00016 15.5013Z"
                    stroke="#FE4849"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 6.83398L6 10.834"
                    stroke="#FE4849"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6 6.83398L10 10.834"
                    stroke="#FE4849"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_661_16711">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.833984)" />
                </clipPath>
            </defs>
        </svg>
    );
}

XCircle.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

XCircle.defaultProps = {
    style: undefined,
    className: undefined,
};
