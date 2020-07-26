import React from 'react';
import PropTypes from 'prop-types';

function SvgElSalvador({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#0052B4">
                    <path d="M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z" />
                </g>
                <path fill="#FFDA44" d="M12.787 16.696L16 11.13l3.213 5.566z" />
                <path fill="#6DA544" d="M20.174 18.533L16 20.62l-4.174-2.087v-2.782h8.348z" />
                <path
                    d="M19.935 11.37l-1.476 1.475a3.478 3.478 0 11-4.919 0l-1.475-1.476a5.565 5.565 0 107.87 0z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgElSalvador.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgElSalvador.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgElSalvador;
