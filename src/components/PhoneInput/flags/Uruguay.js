import React from 'react';
import PropTypes from 'prop-types';

function SvgUruguay({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M16 11.826h15.449a15.91 15.91 0 00-1.797-4.174H16v4.174z" fill="#338AF3" />
                <g fill="#338AF3">
                    <path d="M6.04 28.522h19.92a16.08 16.08 0 003.692-4.174H2.348a16.084 16.084 0 003.692 4.174zM16 0v3.478h9.96A15.932 15.932 0 0016 0z" />
                </g>
                <path
                    d="M16 11.826h15.449a15.91 15.91 0 00-1.797-4.174H16v4.174zM0 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174H0z"
                    fill="#338AF3"
                />
                <path
                    fill="#FFDA44"
                    d="M13.913 9.364l-1.954.919 1.04 1.893-2.121-.406-.27 2.143-1.477-1.576-1.478 1.576-.269-2.143-2.122.405 1.04-1.892-1.953-.92 1.954-.918-1.04-1.893 2.121.406.269-2.143L9.13 6.39l1.478-1.576.269 2.143L13 6.552l-1.041 1.893z"
                />
            </g>
        </svg>
    );
}
SvgUruguay.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgUruguay.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgUruguay;
