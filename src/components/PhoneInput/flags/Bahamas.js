import React from 'react';
import PropTypes from 'prop-types';

function SvgBahamas({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <ellipse fill="#FFDA44" cx={16.031} cy={16} rx={15.969} ry={16} />
                <g fill="#338AF3">
                    <path d="M9.783 10.435h21.224C28.75 4.342 22.897 0 16.03 0c-4.41 0-8.401 1.791-11.29 4.687l5.042 5.748zM9.783 21.565h21.224C28.75 27.658 22.897 32 16.03 32c-4.41 0-8.401-1.791-11.29-4.687l5.042-5.748z" />
                </g>
                <path
                    d="M4.74 4.686c-6.237 6.249-6.237 16.38 0 22.628L16.03 16 4.74 4.686z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}
SvgBahamas.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBahamas.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBahamas;
