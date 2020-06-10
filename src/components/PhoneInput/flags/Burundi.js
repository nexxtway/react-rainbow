import React from 'react';
import PropTypes from 'prop-types';

function SvgBurundi({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#D80027">
                    <path d="M25.742 3.306C20.014-1.1 11.986-1.1 6.258 3.306L16 13.05l9.742-9.743zM16 18.951l-9.742 9.743c5.728 4.408 13.756 4.408 19.484 0L16 18.95z" />
                </g>
                <g fill="#6DA544">
                    <path d="M13.049 16L3.306 6.258c-4.407 5.728-4.407 13.756 0 19.484L13.05 16zM18.951 16l9.743 9.742c4.408-5.728 4.408-13.756 0-19.484L18.952 16z" />
                </g>
                <circle fill="#F0F0F0" cx={16} cy={16} r={6.957} />
                <g fill="#D80027">
                    <path d="M16 11.13l.602 1.044h1.205l-.602 1.043.602 1.044h-1.205L16 15.304l-.602-1.043h-1.205l.602-1.044-.602-1.043h1.205zM12.938 16l.602 1.043h1.205l-.602 1.044.602 1.043H13.54l-.602 1.044-.603-1.044H11.13l.603-1.043-.603-1.043h1.205zM19.062 16l.603 1.043h1.205l-.603 1.044.603 1.043h-1.205l-.603 1.044-.602-1.044h-1.205l.602-1.043-.602-1.043h1.205z" />
                </g>
            </g>
        </svg>
    );
}
SvgBurundi.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBurundi.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBurundi;
