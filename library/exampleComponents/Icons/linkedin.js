import React from 'react';
import PropTypes from 'prop-types';

const Linkedin = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="17px"
            height="16px"
            viewBox="0 0 17 16"
            version="1.1"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Radio-Button-Group"
                    transform="translate(-352.000000, -1590.000000)"
                    fill="#0E76A8"
                    fillRule="nonzero"
                >
                    <g id="Group-34" transform="translate(322.000000, 1409.000000)">
                        <g id="Group-30">
                            <g id="Group-188">
                                <g id="Group-187" transform="translate(0.000000, 120.000000)">
                                    <g id="Group-29" transform="translate(0.000000, 26.000000)">
                                        <g
                                            id="Group-34-Copy-3"
                                            transform="translate(20.000000, 26.000000)"
                                        >
                                            <g id="linkedin-copy-2">
                                                <path
                                                    d="M10.1193288,24.6743014 L13.482,24.6743014 L13.482,13.4662192 L10.1193288,13.4662192 L10.1193288,24.6743014 Z M23.2197534,13.0779863 C21.5877945,13.0779863 20.1275753,13.6739589 19.0917123,14.9894384 L19.0917123,13.4293562 L15.7167123,13.4293562 L15.7167123,24.6744247 L19.0917123,24.6744247 L19.0917123,18.5933836 C19.0917123,17.3082329 20.2691096,16.0545205 21.7438767,16.0545205 C23.2186438,16.0545205 23.5823425,17.3082329 23.5823425,18.5619452 L23.5823425,24.6733151 L26.9450137,24.6733151 L26.9450137,18.3116712 C26.9448904,13.8927945 24.8528219,13.0779863 23.2197534,13.0779863 Z M11.7849452,12.3461507 C12.7142877,12.3461507 13.4685616,11.5918767 13.4685616,10.6625342 C13.4685616,9.73319178 12.7142877,8.9790411 11.7849452,8.9790411 C10.8556027,8.9790411 10.1013288,9.73331507 10.1013288,10.6626575 C10.1013288,11.592 10.8556027,12.3461507 11.7849452,12.3461507 Z"
                                                    id="Shape"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Linkedin.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Linkedin.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Linkedin;
