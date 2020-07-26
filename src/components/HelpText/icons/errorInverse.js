import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function ErrorInverseIcon({ className, style }) {
    const color = useTheme().rainbow.palette.error.main;
    return (
        <svg width={21} height={21} viewBox="0 0 21 21" className={className} style={style}>
            <path
                fill={color}
                d="M10.5.5c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 .954a9.046 9.046 0 100 18.092 9.046 9.046 0 000-18.092zm.199 12.529c.318 0 .588.109.813.328.224.22.336.486.336.799 0 .353-.113.63-.34.831a1.157 1.157 0 01-.794.302 1.19 1.19 0 01-.806-.298c-.23-.199-.344-.477-.344-.835 0-.313.11-.579.33-.799.218-.219.487-.328.805-.328zm.06-9.19c.434 0 .724.15.87.45.146.3.22.733.22 1.297 0 .333-.018.672-.053 1.014l-.326 3.728c-.035.444-.11.784-.227 1.022a.596.596 0 01-.575.355c-.272 0-.461-.115-.567-.344-.106-.23-.182-.579-.227-1.048l-.242-3.622a27.347 27.347 0 01-.068-1.52c0-.418.11-.745.33-.98.218-.234.507-.351.865-.351z"
            />
        </svg>
    );
}
ErrorInverseIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ErrorInverseIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
export default ErrorInverseIcon;
