import React from 'react';
import PropTypes from 'prop-types';

export default function LockIcon(props) {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="13" height="16" viewBox="0 0 13 16">
            <g fill="none">
                <path
                    fill="#B0B4BA"
                    d="M6.22 0C3.605.003 1.485 1.82 1.482 4.063v2.5c0 .172.163.312.365.312h1.458c.201 0 .365-.14.365-.313v-2.5c0-1.208 1.142-2.187 2.552-2.187 1.41 0 2.552.98 2.552 2.188v2.5c0 .172.163.312.364.312h1.459c.201 0 .364-.14.364-.313v-2.5C10.957 1.82 8.837.003 6.22 0z"
                    transform="translate(.75 .5)"
                />
                <path
                    fill="#32C5FF"
                    d="M1.812 6.25h8.587c.988 0 1.789.7 1.789 1.562v5.625c0 .863-.801 1.563-1.79 1.563H1.813c-.988 0-1.79-.7-1.79-1.562V7.813c0-.863.802-1.563 1.79-1.563z"
                    transform="translate(.75 .5)"
                />
                <path
                    fill="#FFF"
                    d="M7.781 9.688c.004-.863-.727-1.566-1.633-1.57-.907-.003-1.644.693-1.648 1.556-.003.597.352 1.143.913 1.407L5.16 12.77c-.026.17.099.329.278.353l.046.003h1.313c.181.002.33-.137.331-.31 0-.015 0-.031-.003-.047l-.253-1.687c.554-.265.906-.803.91-1.393z"
                    transform="translate(.75 .5)"
                />
            </g>
        </svg>
    );
}

LockIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

LockIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
