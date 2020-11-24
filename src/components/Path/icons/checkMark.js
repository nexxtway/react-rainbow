import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="1rem" height="1rem" viewBox="0 0 100 100">
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="checkmark" fillRule="nonzero">
                    <circle cx="49.9026316" fill="currentColor" cy="49.9026316" r="49.9026316" />
                    <path
                        d="M71.1317235,40.4271589 L46.6617839,64.896409 C45.9276651,65.630528 44.9640049,66 44.0003446,66 C43.0366842,66 42.0730241,65.630528 41.3389053,64.896409 L29.1042802,52.6617839 C27.6319066,51.1900998 27.6319066,48.8105894 29.1042802,47.3389053 C30.5759644,45.8665316 32.9547853,45.8665316 34.4271589,47.3389053 L44.0003446,56.912091 L65.8088448,35.1042802 C67.280529,33.6319066 69.6593499,33.6319066 71.1317235,35.1042802 C72.6034078,36.5759644 72.6034078,38.9547853 71.1317235,40.4271589 Z"
                        id="Path"
                        fill="#ffffff"
                    />
                </g>
            </g>
        </svg>
    );
};

Checkmark.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Checkmark.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Checkmark;
