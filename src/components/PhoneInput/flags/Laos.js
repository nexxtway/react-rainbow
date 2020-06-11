import React from 'react';
import PropTypes from 'prop-types';

function SvgLaos({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <g fill="#D80027">
                    <path d="M30.412 9.043C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043L16 10.435l14.412-1.392zM1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044L16 21.566l-14.412 1.39z" />
                </g>
                <path
                    d="M30.412 9.043H1.588A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956h28.824A15.935 15.935 0 0032 16c0-2.493-.57-4.853-1.588-6.957z"
                    fill="#0052B4"
                />
                <circle fill="#F0F0F0" cx={16} cy={16} r={5.565} />
            </g>
        </svg>
    );
}
SvgLaos.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLaos.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLaos;
