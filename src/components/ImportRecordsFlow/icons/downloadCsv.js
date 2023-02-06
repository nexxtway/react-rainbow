import React from 'react';
import PropTypes from 'prop-types';

export default function DownloadCsv(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M17.5 12.834V16.1673C17.5 16.6093 17.3244 17.0333 17.0118 17.3458C16.6993 17.6584 16.2754 17.834 15.8333 17.834H4.16667C3.72464 17.834 3.30072 17.6584 2.98816 17.3458C2.67559 17.0333 2.5 16.6093 2.5 16.1673V12.834"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.8335 8.66797L10.0002 12.8346L14.1668 8.66797"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10 12.834V2.83398"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

DownloadCsv.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

DownloadCsv.defaultProps = {
    style: undefined,
    className: undefined,
};
