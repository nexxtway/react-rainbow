import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function InfoIcon({ className, style }) {
    const palette = useTheme().rainbow.palette;
    const background = palette.brand.main;
    const textColor = palette.getContrastText(background);
    return (
        <svg width={22} height={22} viewBox="0 0 22 22" className={className} style={style}>
            <g fill="none">
                <path
                    fill={background}
                    d="M11 0C4.925 0 0 4.925 0 11c0 6.074 4.925 11 11 11 6.074 0 11-4.926 11-11 0-6.075-4.926-11-11-11z"
                />
                <path
                    fill={textColor}
                    d="M13.29 17.048c-.567.223-1.017.393-1.356.51a3.582 3.582 0 01-1.175.176c-.685 0-1.219-.168-1.599-.502a1.62 1.62 0 01-.569-1.273c0-.2.014-.405.042-.613.03-.21.075-.444.137-.707l.709-2.503c.062-.24.116-.469.16-.681a3.07 3.07 0 00.062-.59c0-.318-.066-.542-.197-.667-.133-.126-.384-.187-.757-.187-.183 0-.37.027-.563.083-.191.06-.357.112-.493.164l.187-.77c.464-.19.908-.352 1.332-.486a3.928 3.928 0 011.201-.203c.68 0 1.206.166 1.576.494.367.328.553.756.553 1.281 0 .109-.013.3-.038.575a3.909 3.909 0 01-.142.755l-.705 2.495c-.058.2-.109.43-.155.686a3.573 3.573 0 00-.068.583c0 .331.073.558.222.678.147.12.405.18.77.18.173 0 .365-.03.583-.09.216-.06.373-.113.471-.158l-.189.77zm-.125-10.13c-.33.305-.725.458-1.188.458-.462 0-.86-.153-1.192-.458a1.46 1.46 0 01-.496-1.11c0-.434.168-.806.496-1.115.332-.309.73-.462 1.192-.462.463 0 .86.153 1.188.462.328.309.493.681.493 1.114 0 .435-.165.806-.493 1.111z"
                />
            </g>
        </svg>
    );
}
InfoIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

InfoIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
export default InfoIcon;
