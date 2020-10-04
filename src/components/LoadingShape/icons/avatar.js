import React from 'react';
import PropTypes from 'prop-types';

const AvatarIcon = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} viewBox="0 0 29 30">
            <title>Combined Shape Copy 2</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="LoadingShape"
                    transform="translate(-573.000000, -1054.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-30" transform="translate(563.000000, 1044.000000)">
                        <path
                            d="M24.4999575,27.2 C30.1866272,27.2 35.3708641,29.3854 39,31.4383 C35.6867666,36.6244 30.4291253,40 24.4999575,40 C18.5708747,40 13.3132334,36.6245 10,31.4385 C13.6299014,29.3851 18.813713,27.2 24.4999575,27.2 Z M24.5000285,10 C28.3596398,10 31.5000571,13.1403602 31.5000571,17.0000285 C31.5000571,20.8596968 28.3596398,24 24.5000285,24 C20.6404173,24 17.5,20.8596398 17.5,16.9999715 C17.5,13.1403032 20.6404173,10 24.5000285,10 Z"
                            id="Combined-Shape-Copy-2"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

AvatarIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

AvatarIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default AvatarIcon;
