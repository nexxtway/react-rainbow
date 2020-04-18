import React from 'react';
import PropTypes from 'prop-types';

export default function DownArrow({ className }) {
    return (
        <svg width="8px" height="5px" viewBox="0 0 8 5" className={className}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    transform="translate(-622.000000, -294.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g transform="translate(380.000000, 256.000000)">
                        <g transform="translate(235.000000, 10.000000)">
                            <g transform="translate(0.000000, 21.000000)">
                                <g transform="translate(11.000000, 9.900000) rotate(-270.000000) translate(-11.000000, -9.900000) translate(8.800000, 6.050000)">
                                    <path d="M0.482052941,7.67294706 C0.369188235,7.67294706 0.255870588,7.62995882 0.1694,7.54328235 C-0.00329411765,7.37058824 -0.00329411765,7.09112353 0.1694,6.91842941 L3.23095294,3.85708235 L0.1694,0.795529412 C-0.00329411765,0.622835294 -0.00329411765,0.343123529 0.1694,0.170676471 C0.342094118,-0.00201764706 0.621805882,-0.00201764706 0.794458824,0.170676471 L4.16821176,3.54442941 C4.34090588,3.71712353 4.34090588,3.99683529 4.16821176,4.16928235 L0.794458824,7.54324118 C0.708276471,7.62971176 0.595164706,7.67294706 0.482052941,7.67294706 Z" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

DownArrow.propTypes = {
    className: PropTypes.string,
};

DownArrow.defaultProps = {
    className: undefined,
};
