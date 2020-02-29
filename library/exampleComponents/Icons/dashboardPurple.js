import React from 'react';
import PropTypes from 'prop-types';

const DashboardPurple = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
        >
            <title>dashboard-purple</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="sidebar-component"
                    transform="translate(-159.000000, -496.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-31" transform="translate(124.000000, 458.000000)">
                        <g id="Group-37" transform="translate(19.000000, 30.000000)">
                            <g id="dashboard" transform="translate(16.000000, 8.000000)">
                                <path
                                    d="M7.0625,11 L0.625,11 C0.2798125,11 0,11.2798125 0,11.625 L0,15.375 C0,15.7201875 0.2798125,16 0.625,16 L7.0625,16 C7.4076875,16 7.6875,15.7201875 7.6875,15.375 L7.6875,11.625 C7.6875,11.2798125 7.4076875,11 7.0625,11 Z"
                                    id="Shape"
                                    fill="#6860DB"
                                />
                                <path
                                    d="M7.0625,0 L0.625,0 C0.2798125,0 0,0.2798125 0,0.625 L0,8.86111111 C0,9.20629861 0.2798125,9.48611111 0.625,9.48611111 L7.0625,9.48611111 C7.4076875,9.48611111 7.6875,9.20629861 7.6875,8.86111111 L7.6875,0.625 C7.6875,0.2798125 7.4076875,0 7.0625,0 Z"
                                    id="Shape"
                                    fill="#5C56B6"
                                />
                                <path
                                    d="M15.375,0 L8.9375,0 C8.5923125,0 8.3125,0.2798125 8.3125,0.625 L8.3125,4.375 C8.3125,4.7201875 8.5923125,5 8.9375,5 L15.375,5 C15.7201875,5 16,4.7201875 16,4.375 L16,0.625 C16,0.2798125 15.7201875,0 15.375,0 Z"
                                    id="Shape"
                                    fill="#5C56B6"
                                />
                                <path
                                    d="M15.375,6.51388889 L8.9375,6.51388889 C8.5923125,6.51388889 8.3125,6.79370139 8.3125,7.13888889 L8.3125,15.375 C8.3125,15.7201875 8.5923125,16 8.9375,16 L15.375,16 C15.7201875,16 16,15.7201875 16,15.375 L16,7.13888889 C16,6.79370139 15.7201875,6.51388889 15.375,6.51388889 Z"
                                    id="Shape"
                                    fill="#6860DB"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

DashboardPurple.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

DashboardPurple.defaultProps = {
    className: undefined,
    style: undefined,
};

export default DashboardPurple;
