import React from 'react';
import PropTypes from 'prop-types';

function SvgFaroeIslands({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M31.304 16l.56-2.087a15.982 15.982 0 00-.415-2.087h-16.84V.061c-.71.061-1.407.17-2.087.32L9.739 2.087l-1.391-.14c-.732.399-1.43.854-2.087 1.359v8.52H.55a15.982 15.982 0 00-.415 2.087L.696 16l-.56 2.087c.093.711.232 1.408.415 2.087h5.71v8.52c.657.505 1.355.96 2.087 1.36l2.087-.141 2.087 1.706c.68.15 1.377.259 2.087.32V20.174h16.84c.183-.679.322-1.376.415-2.087L31.304 16z"
                    fill="#0052B4"
                />
                <path
                    d="M31.865 13.913H12.522V.38c-1.479.328-2.88.86-4.174 1.565v11.968H.135a16.16 16.16 0 000 4.174h8.213v11.968a15.891 15.891 0 004.174 1.565V18.087h19.343a16.16 16.16 0 000-4.174z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgFaroeIslands.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgFaroeIslands.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgFaroeIslands;
