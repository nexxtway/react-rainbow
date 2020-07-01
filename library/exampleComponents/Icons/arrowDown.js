import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="12px"
            height="7px"
            viewBox="0 0 12 7"
            version="1.1"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-DatePickerModal"
                    transform="translate(-381.000000, -1422.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M381.46967,1422.46967 C381.735936,1422.2034 382.1526,1422.1792 382.446212,1422.39705 L382.53033,1422.46967 L387,1426.939 L391.46967,1422.46967 C391.735936,1422.2034 392.1526,1422.1792 392.446212,1422.39705 L392.53033,1422.46967 C392.796597,1422.73594 392.820803,1423.1526 392.602948,1423.44621 L392.53033,1423.53033 L387.53033,1428.53033 C387.264064,1428.7966 386.8474,1428.8208 386.553788,1428.60295 L386.46967,1428.53033 L381.46967,1423.53033 C381.176777,1423.23744 381.176777,1422.76256 381.46967,1422.46967 Z"
                        id="arrowDown"
                    />
                </g>
            </g>
        </svg>
    );
};

ArrowDown.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ArrowDown.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ArrowDown;
