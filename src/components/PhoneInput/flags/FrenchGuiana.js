import React from 'react';
import PropTypes from 'prop-types';

function SvgFrenchGuiana({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M15.99 31.978h-.011a15.936 15.936 0 0011.316-4.683l-5.143-5.142c-.856 5.483-2.91 9.825-6.163 9.825z"
                    fill="#FFD72E"
                />
                <path
                    d="M27.295 4.683A15.94 15.94 0 0015.985 0c5.581 0 6.167 22.153 6.167 22.153l5.143 5.143c6.245-6.245 6.244-16.369 0-22.613z"
                    fill="#008E56"
                />
                <path
                    d="M22.152 22.153L4.682 4.683c-6.243 6.244-6.243 16.368 0 22.612a15.94 15.94 0 0011.296 4.683h.01c3.255 0 5.308-4.342 6.164-9.825z"
                    fill="#FFD72E"
                />
                <path
                    d="M22.152 22.153C23.62 12.753 21.566 0 15.99 0h-.003A15.94 15.94 0 004.683 4.684l17.47 17.469z"
                    fill="#008E56"
                />
                <path
                    fill="#D32027"
                    d="M15.962 11.095l1.034 3.182h3.345l-2.706 1.966 1.033 3.182-2.706-1.967-2.707 1.967 1.034-3.182-2.707-1.966h3.346z"
                />
            </g>
        </svg>
    );
}
SvgFrenchGuiana.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgFrenchGuiana.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgFrenchGuiana;
