import React from 'react';
import PropTypes from 'prop-types';

function SvgEritrea({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M14.58 14.58S4.686 27.263 4.677 27.26a15.919 15.919 0 0011.292 4.678c8.82 0 15.969-7.15 15.969-15.97L14.58 14.58z"
                    fill="#338AF3"
                />
                <path
                    d="M14.58 15.969S4.686 4.675 4.677 4.677A15.919 15.919 0 0115.97 0c8.82 0 15.969 7.15 15.969 15.969H14.58z"
                    fill="#6DA544"
                />
                <path
                    d="M4.677 4.677c-6.236 6.236-6.236 16.347 0 22.584 0 .002 27.26-11.292 27.26-11.292L4.678 4.677z"
                    fill="#D80027"
                />
                <path
                    d="M8.332 9.373a5.56 5.56 0 00-5.555 5.554v2.083a5.56 5.56 0 005.555 5.555 5.56 5.56 0 005.554-5.555v-2.083a5.56 5.56 0 00-5.554-5.554zm3.471 7.637a3.478 3.478 0 01-2.43 3.312v-2.27l1.474-1.474-1.473-1.473-.001-.524v-.695H7.29v2.083L5.818 17.44l1.472 1.473v1.408a3.478 3.478 0 01-2.43-3.312v-2.083a3.475 3.475 0 013.472-3.471 3.475 3.475 0 013.471 3.471v2.083z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgEritrea.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgEritrea.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgEritrea;
