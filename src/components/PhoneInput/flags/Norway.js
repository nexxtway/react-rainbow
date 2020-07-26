import React from 'react';
import PropTypes from 'prop-types';

function SvgNorway({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#D80027">
                    <path d="M.551 20.174a16.013 16.013 0 005.71 8.52v-8.52H.55zM14.609 31.94c.458.039.922.06 1.391.06 7.392 0 13.613-5.014 15.449-11.826h-16.84v11.765zM31.449 11.826C29.613 5.014 23.392 0 16 0c-.469 0-.933.021-1.391.06v11.766h16.84zM6.26 3.306a16.014 16.014 0 00-5.709 8.52h5.71v-8.52z" />
                </g>
                <path
                    d="M31.865 13.913H12.522V.38c-1.479.328-2.88.86-4.174 1.565v11.968H.135a16.138 16.138 0 000 4.174h8.213v11.968a15.891 15.891 0 004.174 1.565V18.087h19.343a16.16 16.16 0 000-4.174z"
                    fill="#0052B4"
                />
            </g>
        </svg>
    );
}
SvgNorway.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNorway.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNorway;
