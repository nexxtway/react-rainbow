import React from 'react';
import PropTypes from 'prop-types';

function SvgSaintVincentAndTheGrenadines({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 15.956C0 21.63 2.965 26.61 7.428 29.438V2.472C2.965 5.302 0 10.28 0 15.956z"
                    fill="#2174BA"
                />
                <path
                    d="M24.483 2.472v26.966c4.463-2.829 7.428-7.808 7.428-13.483 0-5.675-2.965-10.654-7.428-13.483z"
                    fill="#1C8C44"
                />
                <path
                    d="M15.312.04c.167-.011.334-.023.5-.03-.167.007-.333.018-.5.03z"
                    fill="#FBD015"
                />
                <path
                    d="M15.955 0c3.657 0 5.795 5.496 6.417 11.926l.177 2.952c.208 8.32-1.989 17.033-6.594 17.033 3.138 0 6.06-.91 8.528-2.473V2.472A15.876 15.876 0 0015.955 0z"
                    fill="#F3C715"
                />
                <path d="M15.812 31.927z" fill="#FBD015" />
                <path
                    d="M23.29 13.56l-.919-1.634c.094.968.153 1.957.178 2.952l.74-1.318z"
                    fill="#1C8C44"
                />
                <g fill="#1A9647">
                    <path d="M15.421.073zM15.955 31.974z" />
                </g>
                <path
                    d="M22.55 14.878l-2.666 4.743-3.404-6.061 3.404-6.062 2.488 4.428C21.75 5.496 19.612 0 15.955 0a16.375 16.375 0 00-.643.014 15.866 15.866 0 00-7.884 2.459v26.965a15.867 15.867 0 007.884 2.46c.037 0 .073.002.109.003.178.006.355.01.534.01 4.605 0 6.802-8.713 6.594-17.033z"
                    fill="#FFD52B"
                />
                <g fill="#1A9647">
                    <path d="M16.48 13.56l3.404 6.061 2.665-4.743a41.333 41.333 0 00-.177-2.952l-2.488-4.428-3.404 6.062zM12.08 7.498L8.675 13.56l3.405 6.061 3.404-6.061zM16.01 14.141l-3.405 6.06 3.405 6.062 3.405-6.061z" />
                </g>
            </g>
        </svg>
    );
}
SvgSaintVincentAndTheGrenadines.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSaintVincentAndTheGrenadines.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSaintVincentAndTheGrenadines;
