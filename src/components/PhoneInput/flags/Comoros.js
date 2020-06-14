import React from 'react';
import PropTypes from 'prop-types';

function SvgComoros({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M32 15.923H14.688c-3.437 3.437-5.515 6.09-7.637 8.212l9.025.813 14.006-1.388A15.897 15.897 0 0032 15.969v-.046z"
                    fill="#D80027"
                />
                <path
                    d="M7.052 8.285h22.98C27.318 3.347 22.066 0 16.033 0c-4.399 0-8.38 1.778-11.269 4.655l2.289 3.63z"
                    fill="#FFDA44"
                />
                <path
                    d="M7.746 23.56c-1.436 1.435-1.99 2.638-3.03 3.677a15.918 15.918 0 0011.315 4.7c6.072 0 11.352-3.388 14.053-8.377H7.746z"
                    fill="#0052B4"
                />
                <path
                    d="M4.74 4.63c-6.237 6.237-6.237 16.348 0 22.584L16.03 15.923 4.74 4.63z"
                    fill="#6DA544"
                />
                <g fill="#F0F0F0">
                    <path d="M4.274 15.923a4.86 4.86 0 013.82-4.747 4.86 4.86 0 100 9.494 4.86 4.86 0 01-3.82-4.747z" />
                    <path d="M8.04 11.757l.258.795h.837l-.677.492.258.796-.677-.492-.676.492.258-.796-.677-.492h.837zM8.04 13.84l.258.795h.837l-.677.492.258.796-.677-.492-.676.492.258-.796-.677-.492h.837zM8.04 15.923l.258.795h.837l-.677.492.258.795-.677-.491-.676.491.258-.795-.677-.492h.837z" />
                    <path d="M8.04 18.005l.258.796h.837l-.677.492.258.795-.677-.491-.676.491.258-.795-.677-.492h.837z" />
                </g>
            </g>
        </svg>
    );
}
SvgComoros.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgComoros.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgComoros;
