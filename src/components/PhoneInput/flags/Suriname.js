import React from 'react';
import PropTypes from 'prop-types';

function SvgSuriname({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M31.005 10.435H.995A15.967 15.967 0 000 16c0 1.957.352 3.832.995 5.565h30.01C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565z"
                    fill="#A2001D"
                />
                <g fill="#6DA544">
                    <path d="M16.046 32c5.48 0 10.316-2.756 13.2-6.956h-26.4c2.884 4.2 7.72 6.956 13.2 6.956zM16.046 0c5.48 0 10.316 2.756 13.2 6.957h-26.4C5.73 2.756 10.567 0 16.047 0z" />
                </g>
                <path
                    fill="#FFDA44"
                    d="M16 10.435l1.381 4.251h4.47l-3.616 2.628 1.382 4.251L16 18.938l-3.617 2.627 1.382-4.251-3.617-2.628h4.47z"
                />
            </g>
        </svg>
    );
}
SvgSuriname.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSuriname.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSuriname;
