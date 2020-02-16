import React from 'react';
import PropTypes from 'prop-types';
import isValidColor from '../../../src/styles/helpers/color/isValidColor';

const Facebook = props => {
    const { className, style, color } = props;
    return (
        <svg
            className={className}
            style={style}
            width="21px"
            height="40px"
            viewBox="0 0 21 40"
            version="1.1"
        >
            <title>icon-facebook</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Button-Group"
                    transform="translate(-246.000000, -1407.000000)"
                    fill={isValidColor(color) ? color : '#3c5997'}
                    fillRule="nonzero"
                >
                    <g id="Group-178" transform="translate(224.000000, 1305.000000)">
                        <g id="Group-176">
                            <g id="tile/social" transform="translate(0.000000, 72.000000)">
                                <g id="icon-facebook">
                                    <g transform="translate(22.000000, 30.000000)">
                                        <path
                                            d="M5.9921875,40 L5.9921875,22.109375 L0,22.109375 L0,15 L5.9921875,15 L5.9921875,9.3984375 C5.9921875,3.3125 9.7109375,0 15.140625,0 C17.7421875,0 19.9765625,0.1953125 20.625,0.28125 L20.625,6.640625 L16.859375,6.640625 C13.90625,6.640625 13.3359375,8.046875 13.3359375,10.1015625 L13.3359375,15 L20,15 L19.0859375,22.109375 L13.3359375,22.109375 L13.3359375,40"
                                            id="Shape"
                                        />
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

Facebook.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
};

Facebook.defaultProps = {
    className: undefined,
    style: undefined,
    color: undefined,
};

export default Facebook;
