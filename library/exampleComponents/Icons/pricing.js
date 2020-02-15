import React from 'react';
import PropTypes from 'prop-types';

const Pricing = props => {
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
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Button-Menu"
                    transform="translate(-1046.000000, -3079.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-33" transform="translate(204.000000, 2851.000000)">
                        <g id="Group-32" transform="translate(823.000000, 110.000000)">
                            <g id="Group-163" transform="translate(19.000000, 118.000000)">
                                <circle id="Oval" fill="#FAC638" cx="8" cy="8" r="8" />
                                <path
                                    d="M10.8333333,9.33333333 C10.8300385,10.4365352 9.9365352,11.3300385 8.83333333,11.3333333 L8.83333333,12 L7.5,12 L7.5,11.3333333 C6.39679813,11.3300385 5.5032948,10.4365352 5.5,9.33333333 L6.83333333,9.33333333 C6.83333333,9.70152317 7.13181017,10 7.5,10 L8.83333333,10 C9.20152317,10 9.5,9.70152317 9.5,9.33333333 C9.5,8.9651435 9.20152317,8.66666667 8.83333333,8.66666667 L7.5,8.66666667 C6.3954305,8.66666667 5.5,7.77123617 5.5,6.66666667 C5.5,5.56209717 6.3954305,4.66666667 7.5,4.66666667 L7.5,4 L8.83333333,4 L8.83333333,4.66666667 C9.9365352,4.66996147 10.8300385,5.5634648 10.8333333,6.66666667 L9.5,6.66666667 C9.5,6.29847683 9.20152317,6 8.83333333,6 L7.5,6 C7.13181017,6 6.83333333,6.29847683 6.83333333,6.66666667 C6.83333333,7.0348565 7.13181017,7.33333333 7.5,7.33333333 L8.83333333,7.33333333 C9.9365352,7.33662813 10.8300385,8.23013147 10.8333333,9.33333333 L10.8333333,9.33333333 Z"
                                    id="Path"
                                    fill="#FFFFFF"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Pricing.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Pricing.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Pricing;
