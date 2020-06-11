import React from 'react';
import PropTypes from 'prop-types';

function SvgVaticanCity({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c0-.696-2.087-16-2.087-16L16 0z"
                    fill="#F0F0F0"
                />
                <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0" fill="#FFDA44" />
                <path
                    d="M22.127 13.923l3.007 3.978a2.087 2.087 0 101.11-.84l-4.687-6.199-1.11.84-1.665 1.258 1.678 2.22 1.667-1.257zm4.329 4.573a.696.696 0 11.839 1.11.696.696 0 01-.84-1.11z"
                    fill="#ACABB1"
                />
                <path
                    d="M27.284 15.18l1.678-2.22-1.665-1.259-1.11-.839-4.686 6.2a2.088 2.088 0 101.11.838l3.007-3.977 1.666 1.256zm-5.86 4.29a.696.696 0 11-1.11-.838.696.696 0 011.11.838z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgVaticanCity.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgVaticanCity.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgVaticanCity;
