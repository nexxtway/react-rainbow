import React from 'react';
import PropTypes from 'prop-types';
import { isValidColor } from '../../../src/styles/helpers/color';

const Google = props => {
    const { className, style, color } = props;
    const isValid = isValidColor(color);
    return (
        <svg
            className={className}
            style={style}
            width="40px"
            height="40px"
            viewBox="0 0 40 40"
            version="1.1"
        >
            <title>google-icon</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Components-Button-Group" transform="translate(-459.000000, -1407.000000)">
                    <g id="Group-178" transform="translate(224.000000, 1305.000000)">
                        <g id="Group-176">
                            <g id="tile/social-copy" transform="translate(223.000000, 72.000000)">
                                <g id="tile/social">
                                    <g id="icon-google" transform="translate(8.000000, 26.000000)">
                                        <g id="google" transform="translate(4.000000, 4.000000)">
                                            <g
                                                transform="translate(0.833333, 0.833333)"
                                                fillRule="nonzero"
                                                id="Shape"
                                            >
                                                <path
                                                    d="M8.49547526,23.1653125 L7.16114583,28.1465495 L2.28420247,28.2497201 C0.82671224,25.5463965 0,22.4534505 0,19.1666667 C0,15.9883691 0.772955729,12.9911816 2.14307292,10.3520964 L2.14412109,10.3520964 L6.48597005,11.148112 L8.38796224,15.4639062 C7.98987956,16.6244629 7.7729069,17.8702962 7.7729069,19.1666667 C7.77305664,20.5736198 8.02791341,21.9216504 8.49547526,23.1653125 Z"
                                                    fill={isValid ? color : '#FBBB00'}
                                                />
                                                <path
                                                    d="M37.9984408,15.5860938 C38.2185579,16.7455273 38.3333333,17.9429199 38.3333333,19.1666667 C38.3333333,20.5388802 38.1890592,21.8774023 37.9142122,23.1685319 C36.9811849,27.5621159 34.5431999,31.3985938 31.1658984,34.1135221 L31.1648503,34.112474 L25.6960612,33.8334342 L24.9220573,29.0017122 C27.1630599,27.6874479 28.9144141,25.6306999 29.8369596,23.1685319 L19.5880339,23.1685319 L19.5880339,15.5860938 L29.9864746,15.5860938 L37.9984408,15.5860938 L37.9984408,15.5860938 Z"
                                                    fill={isValid ? color : '#518EF8'}
                                                />
                                                <path
                                                    d="M31.1647754,34.112474 L31.1658236,34.1135221 C27.8812109,36.7536556 23.7087174,38.3333333 19.1666667,38.3333333 C11.8675358,38.3333333 5.5214974,34.2536035 2.28420247,28.2497949 L8.49547526,23.1653874 C10.1140853,27.4852246 14.281263,30.5603516 19.1666667,30.5603516 C21.2665397,30.5603516 23.2338184,29.9926888 24.9219076,29.0017122 L31.1647754,34.112474 Z"
                                                    fill={isValid ? color : '#28B446'}
                                                />
                                                <path
                                                    d="M31.4006901,4.41252604 L25.1915137,9.49588542 C23.4444271,8.40383464 21.3792188,7.77298177 19.1666667,7.77298177 C14.1706803,7.77298177 9.92556315,10.9891634 8.38803711,15.4639063 L2.14412109,10.3520964 L2.14307292,10.3520964 C5.33297526,4.20191732 11.7590495,0 19.1666667,0 C23.8172038,0 28.081263,1.65656901 31.4006901,4.41252604 Z"
                                                    fill={isValid ? color : '#F14336'}
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

Google.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
};

Google.defaultProps = {
    className: undefined,
    style: undefined,
    color: undefined,
};

export default Google;
