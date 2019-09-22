import React from 'react';
import PropTypes from 'prop-types';

export default function BarsIcon(props) {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
        >
            <g>
                <g transform="translate(-339.000000, -87.000000)" fill="#061C3F">
                    <g id="bars" transform="translate(339.000000, 87.000000)">
                        <path
                            d="M1.57434402,3.12244898 C0.704857828,3.12244898 0,2.42346497 0,1.56122449 C0,0.698984013 0.704857828,0 1.57434402,0 L18.425656,0 C19.2951422,0 20,0.698984013 20,1.56122449 C20,2.42346497 19.2951422,3.12244898 18.425656,3.12244898 L1.57434402,3.12244898 Z"
                            id="Path"
                        />
                        <path
                            d="M1.57434402,10.0612245 C0.704857828,10.0612245 0,9.36224048 0,8.5 C0,7.63775952 0.704857828,6.93877551 1.57434402,6.93877551 L18.425656,6.93877551 C19.2951422,6.93877551 20,7.63775952 20,8.5 C20,9.36224048 19.2951422,10.0612245 18.425656,10.0612245 L1.57434402,10.0612245 Z"
                            id="Path"
                        />
                        <path
                            d="M1.57434402,17 C0.704857828,17 0,16.301016 0,15.4387755 C0,14.576535 0.704857828,13.877551 1.57434402,13.877551 L18.425656,13.877551 C19.2951422,13.877551 20,14.576535 20,15.4387755 C20,16.301016 19.2951422,17 18.425656,17 L1.57434402,17 Z"
                            id="Path"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}

BarsIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

BarsIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
