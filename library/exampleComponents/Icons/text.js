import React from 'react';
import PropTypes from 'prop-types';

const Text = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="328px" height="376px" viewBox="0 0 328 376">
            <g
                id="column-customization"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <path
                    d="M327.66,103.38 L327.66,8.65 C327.66,3.95 323.85,0.14 319.14,0.14 L164,0.14 L8.86,0.14 C4.15,0.14 0.34,3.95 0.34,8.65 L0.34,103.38 C0.34,108.09 4.15,111.9 8.86,111.9 L54.1,111.9 C58.8,111.9 62.61,108.09 62.61,103.38 L62.61,70.93 C62.61,66.22 66.43,62.41 71.13,62.41 L124.34,62.41 C129.05,62.41 132.86,66.22 132.86,70.93 L132.86,305.07 C132.86,309.78 129.05,313.59 124.34,313.59 L101.07,313.59 C96.36,313.59 92.55,317.4 92.55,322.11 L92.55,367.35 C92.55,372.05 96.36,375.86 101.07,375.86 L164,375.86 L226.93,375.86 C231.64,375.86 235.45,372.05 235.45,367.35 L235.45,322.11 C235.45,317.4 231.64,313.59 226.93,313.59 L203.66,313.59 C198.95,313.59 195.14,309.78 195.14,305.07 L195.14,70.93 C195.14,66.22 198.95,62.41 203.66,62.41 L256.87,62.41 C261.57,62.41 265.39,66.22 265.39,70.93 L265.39,103.38 C265.39,108.09 269.2,111.9 273.9,111.9 L319.14,111.9 C323.85,111.9 327.66,108.09 327.66,103.38 Z"
                    id="text"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Text.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Text.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Text;
