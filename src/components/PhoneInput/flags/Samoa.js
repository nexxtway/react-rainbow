import React from 'react';
import PropTypes from 'prop-types';

function SvgSamoa({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16L16 0c8.837 0 16 7.163 16 16z"
                    fill="#D80027"
                />
                <path d="M16 16V0C7.163 0 0 7.163 0 16h16z" fill="#0052B4" />
                <g fill="#F0F0F0">
                    <path d="M12.816 10.435l.259.797h.838l-.678.493.259.797-.678-.493-.678.493.259-.797-.678-.493h.838zM8.606 4.174l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.821.432-1.328-1.13-.821h1.396zM12.78 5.565l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.822.432-1.33-1.13-.82h1.396zM9.48 11.13l.433 1.33h1.396l-1.13.82.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.82H9.05zM5.824 7.652l.431 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397z" />
                </g>
            </g>
        </svg>
    );
}
SvgSamoa.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSamoa.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSamoa;
