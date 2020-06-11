import React from 'react';
import PropTypes from 'prop-types';

function SvgIsleOfMan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <path
                    fill="#F0F0F0"
                    d="M21.924 10.726l-1.13 4.035-3.394-.626-2.184-4.502-5.9 2.094-.466-1.312-1.543-.19 1.163 3.278 4.06-1.038 1.154 3.252-2.807 4.142 4.764 4.063-.903 1.059.607 1.432 2.257-2.647-2.93-2.997 2.24-2.625 4.991.36 1.137-6.158 1.368.253.937-1.242z"
                />
            </g>
        </svg>
    );
}
SvgIsleOfMan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgIsleOfMan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgIsleOfMan;
