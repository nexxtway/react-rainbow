import React from 'react';
import PropTypes from 'prop-types';

function SvgKyrgyzstan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <path
                    fill="#FFDA44"
                    d="M23.825 16l-3.197 1.504L22.33 20.6l-3.472-.665-.44 3.508L16 20.864l-2.418 2.58-.44-3.508-3.472.664 1.703-3.096L8.175 16l3.197-1.504L9.67 11.4l3.472.665.44-3.508L16 11.136l2.419-2.58.44 3.508 3.471-.665-1.702 3.097z"
                />
                <circle fill="#D80027" cx={16} cy={16} r={4.87} />
                <g fill="#FFDA44">
                    <path d="M13.565 16c-.117 0-.233.006-.347.017a2.77 2.77 0 00.65 1.772 4.88 4.88 0 01.942-1.558A3.46 3.46 0 0013.565 16zM15.064 18.62a2.776 2.776 0 001.872 0A3.48 3.48 0 0016 16.998a3.48 3.48 0 00-.936 1.624zM18.41 14.61a2.781 2.781 0 00-4.82 0c.877.004 1.7.242 2.41.654a4.837 4.837 0 012.41-.655zM17.19 16.231c.405.452.726.98.94 1.558a2.77 2.77 0 00.652-1.772 3.49 3.49 0 00-1.592.214z" />
                </g>
            </g>
        </svg>
    );
}
SvgKyrgyzstan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgKyrgyzstan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgKyrgyzstan;
