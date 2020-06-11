import React from 'react';
import PropTypes from 'prop-types';

function SvgKazakhstan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#338AF3" cx={16} cy={16} r={16} />
                <path
                    d="M25.044 16.174H6.956c0 1.249 1.088 2.26 2.337 2.26h-.076a2.26 2.26 0 002.261 2.262 2.26 2.26 0 002.261 2.26h4.522a2.26 2.26 0 002.26-2.26 2.26 2.26 0 002.262-2.261h-.076c1.249 0 2.337-1.012 2.337-2.261z"
                    fill="#FFDA44"
                />
                <path d="M22.26 13.217a6.26 6.26 0 01-12.52 0" fill="#338AF3" />
                <path
                    fill="#FFDA44"
                    d="M20.782 13.217l-1.954.92 1.04 1.892-2.121-.406-.27 2.144L16 16.19l-1.478 1.577-.269-2.144-2.122.406 1.04-1.893-1.953-.919 1.954-.919-1.04-1.892 2.121.406.27-2.144L16 10.245l1.478-1.577.269 2.144 2.122-.406-1.04 1.892z"
                />
            </g>
        </svg>
    );
}
SvgKazakhstan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgKazakhstan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgKazakhstan;
