import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function ErrorIcon({ className, style, isFocused }) {
    const error = useTheme().rainbow.palette.error;
    const background = isFocused ? error.dark : error.main;
    return (
        <svg width={22} height={22} viewBox="0 0 22 22" className={className} style={style}>
            <path
                fill={background}
                d="M10.979 0c6.063 0 10.978 4.915 10.978 10.979 0 6.063-4.915 10.978-10.978 10.978C4.915 21.957 0 17.042 0 10.98 0 4.915 4.915 0 10.979 0zm.229 14.993c-.367 0-.676.127-.93.38-.252.253-.378.56-.378.92 0 .413.132.734.396.963.264.23.574.344.929.344.349 0 .654-.116.915-.348.262-.233.393-.552.393-.959 0-.36-.13-.668-.388-.92-.26-.253-.57-.38-.937-.38zm.07-10.593c-.413 0-.746.135-1 .406-.252.27-.378.646-.378 1.129 0 .354.026.938.078 1.752l.28 4.176c.051.54.139.944.261 1.208s.34.396.654.396c.307 0 .529-.136.662-.41.134-.273.222-.665.262-1.177l.375-4.298c.04-.394.06-.784.06-1.168 0-.65-.084-1.15-.252-1.495-.168-.346-.503-.519-1.003-.519z"
            />
        </svg>
    );
}
ErrorIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isFocused: PropTypes.bool,
};

ErrorIcon.defaultProps = {
    className: undefined,
    style: undefined,
    isFocused: false,
};
export default ErrorIcon;
