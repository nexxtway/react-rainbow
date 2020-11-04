import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="12px"
            height="2px"
            viewBox="0 0 12 2"
            version="1.1"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-CounterInput"
                    transform="translate(-498.000000, -541.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-6-Copy" transform="translate(482.000000, 497.000000)">
                        <path
                            d="M27.1428571,44.1428571 L16.8571429,44.1428571 C16.384,44.1428571 16,44.5268571 16,45 C16,45.4731429 16.384,45.8571429 16.8571429,45.8571429 L27.1428571,45.8571429 C27.616,45.8571429 28,45.4731429 28,45 C28,44.5268571 27.616,44.1428571 27.1428571,44.1428571 Z"
                            id="Path-Copy-6"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

MinusIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MinusIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default MinusIcon;
