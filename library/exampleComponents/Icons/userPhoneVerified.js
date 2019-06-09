import React from 'react';
import PropTypes from 'prop-types';

export default function UserPhoneVerified(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            version="1.1"
        >
            <desc>Created with Sketch.</desc>
            <g id="pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-126" fillRule="nonzero">
                    <circle id="Oval" fill="#00C8C8" cx="256" cy="256" r="256" />
                    <path
                        d="M512,256 C512,249.719 511.763,243.493 511.318,237.325 L360.676,86.683 L149.689,424 L236.986,511.297 C243.264,511.758 249.604,512 256,512 C397.385,512 512,397.385 512,256 Z"
                        id="Path"
                        fill="#00B5B0"
                    />
                    <path
                        d="M339.522,432.382 L172.478,432.382 C153.036,432.382 137.275,416.621 137.275,397.179 L137.275,114.821 C137.275,95.379 153.036,79.618 172.478,79.618 L339.523,79.618 C358.965,79.618 374.726,95.379 374.726,114.821 L374.726,397.179 C374.726,416.621 358.965,432.382 339.522,432.382 Z"
                        id="Path"
                        fill="#495F7A"
                    />
                    <path
                        d="M339.522,79.618 L255.904,79.618 L255.904,432.382 L339.522,432.382 C358.964,432.382 374.725,416.621 374.725,397.179 L374.725,114.821 C374.725,95.379 358.965,79.618 339.522,79.618 Z"
                        id="Path"
                        fill="#31465B"
                    />
                    <rect
                        id="Rectangle"
                        fill="#FFFFFF"
                        x="166.5"
                        y="111"
                        width="179"
                        height="269"
                    />
                    <circle id="Oval" fill="#31465B" cx="256" cy="407" r="17" />
                    <path
                        d="M256,390 C255.968,390 255.937,390.005 255.905,390.005 L255.905,423.995 C255.937,423.995 255.968,424 256,424 C265.389,424 273,416.389 273,407 C273,397.611 265.389,390 256,390 Z"
                        id="Path"
                        fill="#1B2C3A"
                    />
                    <rect
                        id="Rectangle"
                        fill="#DCE1EB"
                        x="202.362"
                        y="191.883"
                        width="107.275"
                        height="107.275"
                    />
                    <rect
                        id="Rectangle"
                        fill="#CDD2E1"
                        x="255.905"
                        y="191.883"
                        width="53.733"
                        height="107.275"
                    />
                    <polygon
                        id="Path"
                        fill="#FF583E"
                        points="231.574 297.313 185.036 250.775 211.199 224.612 231.574 244.987 300.801 175.76 326.964 201.923"
                    />
                    <polygon
                        id="Path"
                        fill="#EF2A1B"
                        points="300.801 175.76 255.905 220.657 255.905 272.982 326.964 201.923"
                    />
                </g>
            </g>
        </svg>
    );
}

UserPhoneVerified.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

UserPhoneVerified.defaultProps = {
    className: undefined,
    style: undefined,
};
