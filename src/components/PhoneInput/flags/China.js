import React from 'react';
import PropTypes from 'prop-types';

function SvgChina({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M.55 12.202C2.666 3.644 11.312-1.568 19.87.549c8.558 2.118 13.77 10.764 11.653 19.322-2.117 8.55-10.763 13.77-19.321 11.652C3.652 29.398-1.568 20.752.549 12.202"
                    fill="#EF3827"
                />
                <path
                    d="M17.05 15.515l-.743.905-1.083-.436.622.986-.743.897 1.131-.291.623.986.072-1.164 1.132-.29-1.083-.437.073-1.156zm4.324-2.448h-1.172l-.356-1.115-.363 1.115h-1.164l.946.687-.364 1.115.945-.687.946.687-.364-1.115.946-.687zm-1.907-4.283l.177 1.155.534-1.042 1.155.186-.824-.824.533-1.043L20 7.741l-.824-.824.178 1.156-1.043.525 1.156.186zm-2.408-5.35l-.744.897-1.083-.428.623.986-.744.897 1.131-.291.623.986.072-1.164 1.132-.29-1.083-.429.073-1.164zm-8.162 5.14L7.798 5.196 6.699 8.574H3.152l2.876 2.085-1.099 3.377 2.877-2.084 2.869 2.084-1.1-3.377 2.878-2.085H8.897z"
                    fill="#FFD203"
                />
            </g>
        </svg>
    );
}
SvgChina.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgChina.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgChina;
