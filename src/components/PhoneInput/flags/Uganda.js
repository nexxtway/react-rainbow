import React from 'react';
import PropTypes from 'prop-types';

function SvgUganda({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M27.925 26.667A15.939 15.939 0 0032 16a15.94 15.94 0 00-4.076-10.667L16 4.173 4.075 5.334A15.94 15.94 0 000 16c0 4.098 1.542 7.836 4.075 10.667L16 27.827l11.925-1.16z"
                    fill="#FFDA44"
                />
                <path
                    d="M4.075 5.333h23.85A15.96 15.96 0 0016 0C11.262 0 7.005 2.06 4.075 5.333z"
                    fill="#000"
                />
                <path
                    d="M0 16l16 1.391L32 16c0-1.87-.322-3.665-.912-5.333H.912A15.97 15.97 0 000 16z"
                    fill="#D80027"
                />
                <path
                    d="M.912 21.333h30.176C31.678 19.665 32 17.87 32 16H0c0 1.87.322 3.665.912 5.333z"
                    fill="#000"
                />
                <path
                    d="M27.925 26.667H4.075A15.959 15.959 0 0016 32c4.738 0 8.995-2.06 11.925-5.333z"
                    fill="#D80027"
                />
                <path
                    d="M21.34 16a5.339 5.339 0 11-10.679 0 5.339 5.339 0 0110.678 0z"
                    fill="#F0F0F0"
                />
                <path
                    d="M17.956 16.272L16 15.425s.458-1.52.482-1.623a1.04 1.04 0 00-.278-.974l.491-.492a1.734 1.734 0 00-1.23-.51c-.48 0-.914.195-1.229.51l.492.492a1.04 1.04 0 00-.26 1.04l-.741.74h1.346s-.557.837-.86 1.523a1.404 1.404 0 00.706 1.836l.406.18.675.636v.695l-.696.696h1.392v-1.391l.634-.635h1.314l.018-.04a1.391 1.391 0 00-.706-1.836z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}
SvgUganda.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgUganda.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgUganda;
