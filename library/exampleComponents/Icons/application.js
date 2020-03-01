import React from 'react';
import PropTypes from 'prop-types';

const Application = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20px"
            height="19px"
            viewBox="0 0 20 19"
            version="1.1"
        >
            <title>application</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="sidebar-component" transform="translate(-157.000000, -579.000000)">
                    <g id="Group-31" transform="translate(124.000000, 458.000000)">
                        <g id="application" transform="translate(33.000000, 121.708696)">
                            <g id="Group" transform="translate(1.113351, 0.000000)" fill="#E20460">
                                <path d="M3.80434783,-3.41632003e-15 L0.808019004,-3.41632003e-15 C0.362018927,-3.41632003e-15 0.00044990882,0.361569018 0.00044990882,0.807569095 L0.00044990882,1.89167628 L2.3061834,2.64360783 L4.61176696,1.89167628 L4.61176696,0.807569095 C4.61191692,0.361569018 4.25034794,-3.55271368e-15 3.80434783,-3.41632003e-15 Z" />
                                <path d="M13.6253479,0 L16.6216767,0 C17.0676768,0 17.4292458,0.361569018 17.4292458,0.807569095 L17.4292458,1.89167628 L15.1235124,2.64360783 L12.8177788,1.89152629 L12.8177788,0.807569095 C12.8177788,0.361569018 13.1793478,0 13.6253479,0 Z" />
                                <path d="M10.2130123,0 L7.21668344,0 C6.77068337,0 6.40911435,0.361569018 6.40911435,0.807569095 L6.40911435,1.89167628 L8.71484787,2.64360783 L11.0204314,1.89152629 L11.0204314,0.807569095 C11.0204314,0.361569018 10.6590124,0 10.2130123,0 Z" />
                            </g>
                            <path
                                d="M18.5425964,1.89152629 L1.11380052,1.89152629 C0.498638295,1.89152629 0,2.39031458 0,3.00547676 L0,7.05082062 L9.82819848,8.41521497 L19.656397,7.05082062 L19.656397,3.00547676 C19.656397,2.39031458 19.1577587,1.89152629 18.5425964,1.89152629 Z"
                                fill="#F7076A"
                            />
                            <path
                                d="M1.58199562,7.05082062 L1.58199562,3.00547676 C1.58199562,2.39031458 2.08063392,1.89152629 2.69579614,1.89152629 L1.11380052,1.89152629 C0.498638295,1.89152629 5.68434189e-14,2.39031458 5.68434189e-14,3.00547676 L5.68434189e-14,7.05082062 L9.82819848,8.41521497 L10.6192713,8.3054396 L1.58199562,7.05082062 Z"
                                fill="#E20460"
                            />
                            <path
                                d="M9.82819848,11.0588228 L0,12.2101149 L0,16.2554588 C0,16.870621 0.498638295,17.3694093 1.11380052,17.3694093 L18.5425964,17.3694093 C19.1577587,17.3694093 19.656397,16.870621 19.656397,16.2554588 L19.656397,12.2101149 L9.82819848,11.0588228 Z"
                                fill="#FF73AD"
                            />
                            <path
                                d="M1.58199562,16.2554588 L1.58199562,12.2101149 L10.6192713,11.1515021 L9.82819848,11.0588228 L5.68434189e-14,12.2101149 L5.68434189e-14,16.2554588 C5.68434189e-14,16.870621 0.498638295,17.3694093 1.11380052,17.3694093 L2.69579614,17.3694093 C2.08063392,17.3694093 1.58199562,16.870621 1.58199562,16.2554588 Z"
                                fill="#F94D95"
                            />
                            <polygon
                                fill="#BFC1CA"
                                points="0 7.05082062 19.656397 7.05082062 19.656397 12.2101149 0 12.2101149"
                            />
                            <polygon
                                fill="#ACAEB6"
                                points="-4.26325641e-14 7.05082062 1.58199562 7.05082062 1.58199562 12.2101149 -4.26325641e-14 12.2101149"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Application.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Application.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Application;
