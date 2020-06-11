import React from 'react';
import PropTypes from 'prop-types';

function SvgEquatorialGuinea({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M9.783 10.414h21.224C28.75 4.334 22.897 0 16.03 0c-4.41 0-8.401 1.788-11.29 4.678l5.042 5.736z"
                    fill="#6DA544"
                />
                <path
                    d="M9.783 21.523h21.224c-2.257 6.081-8.11 10.415-14.976 10.415-4.41 0-8.401-1.788-11.29-4.678l5.042-5.737z"
                    fill="#D80027"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#0052B4"
                />
                <path
                    d="M18.808 13.192v3.471c0 2.126 2.778 2.777 2.778 2.777s2.777-.651 2.777-2.777v-3.471h-5.555z"
                    fill="#DEDDE0"
                />
                <path fill="#786145" d="M20.891 16.038h1.389v2.013h-1.389z" />
                <path
                    d="M22.974 15.275a1.389 1.389 0 10-2.777 0 .694.694 0 100 1.388h2.777a.694.694 0 100-1.388z"
                    fill="#6DA544"
                />
            </g>
        </svg>
    );
}
SvgEquatorialGuinea.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgEquatorialGuinea.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgEquatorialGuinea;
