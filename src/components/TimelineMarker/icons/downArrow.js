import React from 'react';
import PropTypes from 'prop-types';

export default function DownArrow(props) {
    const { className, style } = props;
    return (
        <svg width="10px" height="6px" viewBox="0 0 10 6" className={className} style={style}>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Components-Tree" transform="translate(-171.000000, -534.000000)">
                    <g id="Group-18" transform="translate(127.000000, 350.000000)">
                        <g id="Group-13-Copy" transform="translate(41.000000, 107.000000)">
                            <g id="Group-12" transform="translate(0.000000, 64.000000)">
                                <g id="Group-64" transform="translate(0.000000, 8.000000)">
                                    <rect id="Rectangle" x="0" y="0" width="16" height="16" />
                                    <path
                                        d="M11.8583275,5.45142276 C12.1285441,5.19406045 12.5562312,5.20448084 12.8135935,5.47469735 C13.0475593,5.72034873 13.060217,6.09614112 12.8575671,6.35579695 L12.7903189,6.42996332 L8.46599569,10.5485785 C8.2311372,10.7722648 7.87548362,10.7946334 7.61646611,10.6156844 L7.53400431,10.5485785 L3.20968107,6.42996332 C2.93946456,6.17260101 2.92904417,5.74491387 3.18640648,5.47469735 C3.42037222,5.22904598 3.79510228,5.19810214 4.06431909,5.38786628 L4.14167245,5.45142276 L8,9.12537693 L11.8583275,5.45142276 Z"
                                        id="Line-3"
                                        fill="currentColor"
                                        fillRule="nonzero"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

DownArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

DownArrow.defaultProps = {
    className: undefined,
    style: undefined,
};
