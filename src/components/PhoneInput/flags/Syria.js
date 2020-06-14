import React from 'react';
import PropTypes from 'prop-types';

function SvgSyria({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z"
                    fill="#D80027"
                />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#000"
                />
                <g fill="#6DA544">
                    <path d="M9.56 12.174l.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642L7.3 19.13l.863-2.657-2.26-1.642h2.794zM22.44 12.174l.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.642h2.794z" />
                </g>
            </g>
        </svg>
    );
}
SvgSyria.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSyria.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSyria;
