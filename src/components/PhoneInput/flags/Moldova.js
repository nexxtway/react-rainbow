import React from 'react';
import PropTypes from 'prop-types';

function SvgMoldova({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M22.956 1.588A15.937 15.937 0 0016 0c-2.493 0-4.853.57-6.957 1.588L7.654 16l1.39 14.412A15.937 15.937 0 0016 32c2.493 0 4.853-.57 6.956-1.588L24.348 16 22.956 1.588z"
                    fill="#FFDA44"
                />
                <path
                    d="M9.043 1.588C3.692 4.176 0 9.657 0 16s3.692 11.824 9.043 14.412V1.588z"
                    fill="#0052B4"
                />
                <path
                    d="M22.956 1.588v28.824C28.308 27.824 32 22.343 32 16S28.308 4.176 22.956 1.588z"
                    fill="#D80027"
                />
                <path
                    d="M21.565 12.589H17.74a1.74 1.74 0 10-3.478 0h-3.826c0 .945.824 1.712 1.77 1.712h-.058c0 .946.767 1.712 1.713 1.712 0 .838.6 1.533 1.395 1.682l-1.35 3.047A5.548 5.548 0 0016 21.15c.74 0 1.448-.146 2.094-.408l-1.35-3.047a1.712 1.712 0 001.396-1.682c.946 0 1.713-.766 1.713-1.712h-.057c.945 0 1.77-.767 1.77-1.712z"
                    fill="#FF9811"
                />
                <path fill="#0052B4" d="M16 14.957L13.74 16v2.087L16 19.478l2.26-1.391V16z" />
                <path fill="#D80027" d="M13.739 13.913h4.522V16h-4.522z" />
            </g>
        </svg>
    );
}
SvgMoldova.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMoldova.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMoldova;
