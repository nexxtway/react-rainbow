import React from 'react';
import PropTypes from 'prop-types';

const Charts = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20px"
            height="21px"
            viewBox="0 0 20 21"
            version="1.1"
        >
            <title>charts</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="sidebar-component"
                    transform="translate(-157.000000, -820.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-31" transform="translate(124.000000, 458.000000)">
                        <g id="charts" transform="translate(33.000000, 362.708696)">
                            <path
                                d="M9.97922579,19.7150558 C15.3561763,19.7150558 19.7150558,15.4778741 19.7150558,10.1009237 C19.7150558,10.1009237 9.73583004,10.1009237 9.73583004,10.2226215 C9.73583004,10.2226215 3.67550195,17.3990142 3.67550195,17.3990142 C5.37403186,18.843471 7.57484406,19.7150558 9.97922579,19.7150558 Z"
                                id="Oval-5"
                                fill="#FFCC00"
                            />
                            <path
                                d="M10.2226215,9.85752792 C10.2226215,9.85752792 19.7150558,9.73583004 19.7150558,9.73583004 C19.7150558,5.91878502 17.5184235,2.61479096 14.320317,1.01900595 C14.320317,1.01900595 10.2226215,9.73583004 10.2226215,9.85752792 Z"
                                id="Oval-4"
                                fill="#FF6837"
                            />
                            <path
                                d="M14.0196441,0.868963354 C12.8343502,0.287251699 11.5134804,0.0611163153 10.1172058,0.0073326559 C10.1172058,0.0073326559 10.1009237,9.73583004 9.97922579,9.73583004 C9.99550792,9.73583004 14.0196441,0.868963354 14.0196441,0.868963354 Z"
                                id="Oval-3"
                                fill="#FE4849"
                            />
                            <path
                                d="M9.73583004,9.73583004 C9.73583004,4.35887958 9.73583004,0 9.73583004,0 C4.35887958,0 0,4.35887958 0,9.73583004 C0,12.725811 1.34784408,15.4009862 3.46908681,17.18691 C3.46908681,17.18691 9.73583004,9.73583004 9.73583004,9.73583004 Z"
                                id="Oval-2"
                                fill="#1AD1A3"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Charts.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Charts.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Charts;
