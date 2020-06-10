import React from 'react';
import PropTypes from 'prop-types';

function SvgPhilippines({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0v16L4.686 27.314A15.95 15.95 0 0016 32c8.837 0 16-7.163 16-16S16 0 16 0z"
                    fill="#D80027"
                />
                <path
                    d="M16 0A15.95 15.95 0 004.686 4.686L16 16h16c0-8.837-7.163-16-16-16z"
                    fill="#0052B4"
                />
                <g fill="#FFDA44">
                    <path d="M10.956 16l-1.954-.92 1.04-1.892-2.122.406-.268-2.143-1.479 1.576-1.477-1.576-.27 2.143-2.121-.406 1.04 1.893L1.391 16l1.954.92-1.04 1.892 2.122-.406.269 2.143 1.478-1.576 1.478 1.576.268-2.143 2.122.406-1.04-1.893zM4.267 6.26l.65.91 1.066-.338-.664.9.65.909-1.06-.354-.664.9.009-1.118-1.06-.353 1.065-.338zM4.267 22.813l.65.91 1.066-.338-.664.9.65.908-1.06-.353-.664.9.009-1.118-1.06-.354 1.065-.337zM13.542 14.537l-.65.91-1.066-.338.664.899-.65.909 1.06-.353.663.899-.008-1.118 1.06-.353-1.065-.337z" />
                </g>
            </g>
        </svg>
    );
}
SvgPhilippines.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPhilippines.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPhilippines;
