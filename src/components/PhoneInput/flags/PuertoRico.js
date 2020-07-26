import React from 'react';
import PropTypes from 'prop-types';

function SvgPuertoRico({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <g fill="#D80027">
                    <path d="M16.031 0C10.807 0 6.17 2.509 3.255 6.388h25.552C25.894 2.509 21.255 0 16.03 0zM16.031 31.938c5.224 0 9.863-2.51 12.776-6.388H3.255c2.914 3.879 7.552 6.388 12.776 6.388zM.062 15.969c0 1.094.11 2.162.32 3.194H31.68c.21-1.032.32-2.1.32-3.194 0-1.094-.11-2.162-.32-3.194H.382c-.21 1.032-.32 2.1-.32 3.194z" />
                </g>
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#0052B4"
                />
                <path
                    fill="#F0F0F0"
                    d="M6.525 11.803l1.034 3.182h3.347l-2.707 1.967 1.033 3.183-2.707-1.967-2.707 1.967 1.034-3.183-2.707-1.967h3.346z"
                />
            </g>
        </svg>
    );
}
SvgPuertoRico.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPuertoRico.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPuertoRico;
