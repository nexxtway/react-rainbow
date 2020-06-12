import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function WarningIcon({ className, style }) {
    const background = useTheme().rainbow.palette.warning.main;
    return (
        <svg width={24} height={22} viewBox="0 0 24 22" className={className} style={style}>
            <g fill="none">
                <path
                    fill={background}
                    d="M3.622 22C1.622 22 0 20.36 0 18.337c0-.666.177-1.29.484-1.828L8.862 1.834A3.612 3.612 0 0112 0c1.342 0 2.512.738 3.138 1.834l8.378 14.675A3.68 3.68 0 0124 18.337C24 20.36 22.378 22 20.378 22z"
                />
                <path
                    fill="#FFF"
                    d="M12.198 16.5a.917.917 0 110 1.833.917.917 0 010-1.833zm-.013-9.732a1.21 1.21 0 011.203 1.317l-.482 5.966a.725.725 0 01-1.443-.001l-.482-5.965a1.212 1.212 0 011.204-1.317z"
                />
            </g>
        </svg>
    );
}
WarningIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

WarningIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
export default WarningIcon;
