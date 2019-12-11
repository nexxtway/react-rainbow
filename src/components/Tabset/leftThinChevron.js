import React from 'react';
import PropTypes from 'prop-types';

export default function LeftThinChevron(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="8px"
            height="15px"
            viewBox="0 0 8 15"
            fill="currentColor"
        >
            <g transform="translate(-304.000000, -289.000000)">
                <g transform="translate(-12.000000, 268.000000)">
                    <g transform="translate(300.000000, 10.000000)">
                        <g transform="translate(20.000000, 18.720000) scale(-1, 1) translate(-20.000000, -18.720000) translate(16.000000, 11.520000)">
                            <path d="M0.876459893,14.3494075 C0.671251337,14.3494075 0.465219251,14.2690139 0.308,14.1069176 C-0.00598930481,13.7839572 -0.00598930481,13.2613219 0.308,12.9383615 L5.87445989,7.21324492 L0.308,1.48774332 C-0.00598930481,1.16478289 -0.00598930481,0.641685561 0.308,0.319187166 C0.621989305,-0.00377326203 1.13055615,-0.00377326203 1.44447059,0.319187166 L7.57856684,6.62854332 C7.89255615,6.95150374 7.89255615,7.47460107 7.57856684,7.79709947 L1.44447059,14.1068406 C1.2877754,14.2685519 1.08211765,14.3494075 0.876459893,14.3494075 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

LeftThinChevron.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
LeftThinChevron.defaultProps = {
    className: undefined,
    style: undefined,
};
