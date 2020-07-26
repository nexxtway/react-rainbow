import React from 'react';
import PropTypes from 'prop-types';

function SvgCuba({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path fill="#FF9811" d="M0 2.777V29.16 15.97z" />
                <circle fill="#F0F0F0" cx={15.969} cy={15.969} r={15.969} />
                <g fill="#0052B4">
                    <path d="M15.969 0C10.745 0 6.107 2.51 3.193 6.388h25.552C25.83 2.509 21.193 0 15.969 0zM15.969 31.938c5.224 0 9.862-2.51 12.776-6.388H3.193c2.913 3.879 7.552 6.388 12.776 6.388zM0 15.969c0 1.094.11 2.162.32 3.194h31.298c.21-1.032.32-2.1.32-3.194 0-1.094-.11-2.162-.32-3.194H.32C.11 13.807 0 14.875 0 15.97z" />
                </g>
                <path
                    d="M4.677 4.677c-6.236 6.236-6.236 16.347 0 22.584L15.97 15.969 4.677 4.677z"
                    fill="#D80027"
                />
                <path
                    fill="#F0F0F0"
                    d="M6.463 11.803l1.034 3.182h3.346l-2.707 1.967 1.034 3.183-2.707-1.967-2.707 1.967 1.034-3.183-2.707-1.967h3.346z"
                />
            </g>
        </svg>
    );
}
SvgCuba.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCuba.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCuba;
