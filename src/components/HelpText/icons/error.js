import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function ErrorIcon({ className, style }) {
    const background = useTheme().rainbow.palette.error.main;
    return (
        <svg width={22} height={22} viewBox="0 0 22 22" className={className} style={style}>
            <g fill="none">
                <circle cx={10.979} cy={10.979} r={10.979} fill={background} />
                <path d="M21.957 10.979c0 6.038-4.94 10.978-10.978 10.978-3.5 0-6.588-1.578-8.577-4.117 1.852 1.51 4.254 2.402 6.861 2.402 6.038 0 10.979-4.94 10.979-10.979 0-2.607-.892-5.009-2.402-6.861 2.539 1.99 4.117 5.077 4.117 8.577z" />
                <path
                    fill="#FFF"
                    d="M10.257 11.863l-.279-4.176A31.255 31.255 0 019.9 5.935c0-.483.126-.859.379-1.13.253-.27.586-.405.998-.405.5 0 .835.173 1.003.519.168.346.253.844.253 1.495 0 .384-.02.774-.06 1.168l-.376 4.298c-.04.512-.128.904-.262 1.178a.684.684 0 01-.662.409c-.315 0-.532-.132-.654-.396s-.21-.667-.262-1.208zm.968 5.737a1.37 1.37 0 01-.929-.344c-.264-.23-.396-.55-.396-.963 0-.36.126-.667.379-.92s.562-.38.929-.38c.366 0 .678.127.937.38.258.252.388.56.388.92 0 .407-.13.726-.393.959a1.334 1.334 0 01-.915.348z"
                />
            </g>
        </svg>
    );
}
ErrorIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ErrorIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
export default ErrorIcon;
