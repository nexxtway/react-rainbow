import React from 'react';
import PropTypes from 'prop-types';

export default function RightThinChevron(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="8px"
            height="14px"
            viewBox="0 0 8 14"
            fill="currentColor"
        >
            <g transform="translate(-337.000000, -289.000000)">
                <g transform="translate(-12.000000, 268.000000)">
                    <g transform="translate(300.000000, 10.000000)">
                        <g transform="translate(49.000000, 11.520000)">
                            <path d="M0.876459893,13.5046521 C0.671251337,13.5046521 0.465219251,13.4289475 0.308,13.2763055 C-0.00598930481,12.9721818 -0.00598930481,12.4800292 0.308,12.1759055 L5.87445989,6.78470654 L0.308,1.39314503 C-0.00598930481,1.08902128 -0.00598930481,0.596433626 0.308,0.292744961 C0.621989305,-0.0113787874 1.13055615,-0.0113787874 1.44447059,0.292744961 L7.57856684,6.23410767 C7.89255615,6.53823142 7.89255615,7.03081908 7.57856684,7.33450774 L1.44447059,13.276233 C1.2877754,13.4285124 1.08211765,13.5046521 0.876459893,13.5046521 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

RightThinChevron.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
RightThinChevron.defaultProps = {
    className: undefined,
    style: undefined,
};
