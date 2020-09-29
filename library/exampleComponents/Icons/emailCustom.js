import React from 'react';
import PropTypes from 'prop-types';

const EmailCustom = props => {
    const { className } = props;
    return (
        <svg className={className} width="491px" height="342px" viewBox="0 0 491 342" version="1.1">
            <g id="pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="mail-(3)" fillRule="nonzero">
                    <path
                        d="M480.427,22.642 L301.014,152.348 L271.574,173.681 C255.978,185.203 234.69,185.203 219.094,173.681 L189.654,152.348 L10.027,22.855 C20.018,8.883 36.157,0.614 53.334,0.667737145 L437.334,0.667737145 C454.385,0.683 470.401,8.85 480.427,22.642 Z"
                        id="Path"
                        fill="#FFD54F"
                    />
                    <g id="Group" transform="translate(0.000000, 22.000000)" fill="#FFC107">
                        <path
                            d="M10.027,0.855 L189.654,130.348 L15.574,304.428 C5.578,294.407 -0.025,280.823 -0.000465786705,266.668 L-0.000465786705,32.002 C-0.047,20.818 3.464,9.91 10.027,0.855 Z"
                            id="Path"
                        />
                        <path
                            d="M490.667083,32.002 L490.667083,266.669 C490.692,280.824 485.09,294.408 475.094,304.429 L301.014,130.349 L480.427,0.642 C487.088,9.74 490.674,20.725 490.667083,32.002 Z"
                            id="Path"
                        />
                    </g>
                    <path
                        d="M301.014,152.348 L271.574,173.681 C255.978,185.203 234.69,185.203 219.094,173.681 L189.654,152.348 L15.574,326.428 C25.595,336.424 39.179,342.027 53.334,342.001357 L437.334,342.001357 C451.489,342.026 465.073,336.424 475.094,326.428 L301.014,152.348 Z"
                        id="Path"
                        fill="#FFA000"
                    />
                </g>
            </g>
        </svg>
    );
};

EmailCustom.propTypes = {
    className: PropTypes.string,
};

EmailCustom.defaultProps = {
    className: undefined,
};

export default EmailCustom;
