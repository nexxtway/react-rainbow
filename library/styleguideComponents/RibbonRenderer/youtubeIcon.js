import React from 'react';
import PropTypes from 'prop-types';

export default function YouTubeIcon(props) {
    const { className, style } = props;

    return (
        <svg className={className} style={style} width="40px" height="29px" viewBox="0 0 40 29">
            <g id="demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="youtube" transform="translate(0.000279, 0.055929)" fillRule="nonzero">
                    <path
                        d="M0.895139705,23.6800236 C1.71124219,26.5438047 4.20784957,27.0677877 4.3744011,27.1683002 C8.48322727,28.2755849 31.5139724,28.2788804 35.6844226,27.1683002 C38.5407813,26.3510186 39.0654186,23.8447981 39.163684,23.6800236 C40.2512655,17.9557569 40.3228826,10.4931189 39.1137186,3.99770744 L39.163684,4.32066549 C38.3475815,1.45688437 35.8509741,0.932901404 35.6844226,0.832388948 C31.6305585,-0.256770616 8.53985478,-0.297964246 4.3744011,0.832388948 C1.51804242,1.6513183 0.993405106,4.15589098 0.895139705,4.32066549 C-0.269055467,10.3365831 -0.327348501,17.2389877 0.895139705,23.6800236 Z"
                        id="Path"
                        fill="#E53935"
                    />
                    <polygon
                        id="Path"
                        fill="#FFFFFF"
                        points="15.7923366 19.935456 15.7923366 7.96745599 26.0750033 13.9604816"
                    />
                </g>
            </g>
        </svg>
    );
}

YouTubeIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

YouTubeIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
