import React from 'react';
import PropTypes from 'prop-types';

const LocationIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="27px"
            height="25px"
            viewBox="0 0 27 25"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <filter
                    x="-2.5%"
                    y="-10.0%"
                    width="105.0%"
                    height="120.0%"
                    filterUnits="objectBoundingBox"
                    id="filter-1"
                >
                    <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                        stdDeviation="1"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.119400131 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                        result="shadowMatrixOuter1"
                    />
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Map"
                    transform="translate(-817.000000, -852.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-6-Copy" transform="translate(121.000000, 800.000000)">
                        <g
                            id="Group-5"
                            filter="url(#filter-1)"
                            transform="translate(687.000000, 46.000000)"
                        >
                            <g id="Group-12" transform="translate(10.000000, 8.000000)">
                                <polygon
                                    id="Path"
                                    fill="#E6E9EE"
                                    points="7.66349206 20.8730159 0.787301587 18.4730159 5.5047619 8.3968254 9.42222222 9.10793651"
                                />
                                <polygon
                                    id="Path"
                                    fill="#CED1D5"
                                    points="7.66349206 20.8730159 14.9269841 18.4603175 13.5555556 8.3968254 9.42222222 9.10793651"
                                />
                                <polygon
                                    id="Path"
                                    fill="#E6E9EE"
                                    points="23.6063492 20.8730159 14.9269841 18.4603175 13.5555556 8.3968254 17.8984127 9.10793651"
                                />
                                <g
                                    id="Group"
                                    transform="translate(2.603175, 9.571429)"
                                    fill="#84DBFF"
                                >
                                    <polygon
                                        id="Path"
                                        points="14.0952381 0.596825397 11.1174603 0.0507936508 12.0825397 7.14285714 17.6507937 8.63492063"
                                    />
                                    <polygon
                                        id="Path"
                                        points="3.54920635 0.20952381 0.0571428571 7.85396825 5.28253968 9.47301587 6.61587302 0.761904762"
                                    />
                                </g>
                                <polygon
                                    id="Path"
                                    fill="#54C0EB"
                                    points="13.7206349 9.62222222 9.21904762 10.3333333 7.88571429 19.0444444 14.6857143 16.7142857"
                                />
                                <path
                                    d="M17.0666667,5.88253968 C17.0666667,8.73968254 11.8920635,14.9809524 11.8920635,14.9809524 C11.8920635,14.9809524 6.71746032,8.73968254 6.71746032,5.88253968 C6.71746032,3.02539683 9.03492063,0.707936508 11.8920635,0.707936508 C14.7492063,0.707936508 17.0666667,3.01904762 17.0666667,5.88253968 Z"
                                    id="Path"
                                    fill="#F1543F"
                                />
                                <circle
                                    id="Oval"
                                    fill="#FFFFFF"
                                    cx="11.8857143"
                                    cy="5.45714286"
                                    r="2.62222222"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

LocationIcon.propTypes = {
    className: PropTypes.string,
};

LocationIcon.defaultProps = {
    className: undefined,
};

export default LocationIcon;
