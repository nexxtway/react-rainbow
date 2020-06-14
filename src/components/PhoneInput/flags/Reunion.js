import React from 'react';
import PropTypes from 'prop-types';

function SvgReunion({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <defs>
                <circle id="reunion_svg__a" cx={16} cy={16} r={16} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="reunion_svg__b" fill="#fff">
                    <use xlinkHref="#reunion_svg__a" />
                </mask>
                <use fill="#D8D8D8" xlinkHref="#reunion_svg__a" />
                <g fillRule="nonzero" mask="url(#reunion_svg__b)">
                    <path
                        d="M42.73-.533a6.173 6.173 0 00-3.08-2.947 6.127 6.127 0 00-2.449-.508H-5.85c-.87 0-1.698.182-2.45.508a6.174 6.174 0 00-3.079 2.947A6.124 6.124 0 00-12 2.162V29.838c0 1.847.816 3.503 2.105 4.63a6.125 6.125 0 004.045 1.52h43.051c1.55 0 2.964-.574 4.046-1.52a6.134 6.134 0 002.104-4.63V2.162c0-.967-.223-1.881-.621-2.695z"
                        fill="#36F"
                    />
                    <g fill="red">
                        <path d="M15.676 16.029l-.045.003-25.526 18.436a6.125 6.125 0 004.045 1.52h43.051c1.55 0 2.964-.574 4.046-1.52L15.72 16.032l-.045-.003z" />
                        <path d="M15.805 16.133l.165-.014-.165-.119-.165.119z" />
                    </g>
                    <g fill="#FF0">
                        <path d="M15.676 16.029l-.036-.003L-12 13.742v4.574l27.63-2.284zM15.676 16.029l.045.003 27.63 2.284v-4.574l-27.64 2.284zM-8.3-3.48a6.174 6.174 0 00-3.079 2.947L15.676 16-8.3-3.48zM42.73-.533a6.173 6.173 0 00-3.08-2.947L15.676 16 42.73-.533zM17.982-3.988h-4.613L15.676 16z" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
SvgReunion.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgReunion.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgReunion;
