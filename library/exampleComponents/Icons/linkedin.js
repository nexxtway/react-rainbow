import React from 'react';
import PropTypes from 'prop-types';
import isValidColor from '../../../src/styles/helpers/color/isValidColor';

const Linkedin = props => {
    const { className, style, color } = props;
    return (
        <svg
            className={className}
            style={style}
            width="40px"
            height="38px"
            viewBox="0 0 40 38"
            version="1.1"
        >
            <title>linkedin</title>
            <g id="pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="customization-theming"
                    transform="translate(-1011.000000, -1802.000000)"
                    fill={isValidColor(color) ? color : '#0077b5'}
                    fillRule="nonzero"
                >
                    <g id="tile/social-copy-3" transform="translate(999.000000, 1770.000000)">
                        <g id="tile/social">
                            <g id="linkedin" transform="translate(12.000000, 32.000000)">
                                <path
                                    d="M0.0427459907,37.2727472 L8.02834118,37.2727472 L8.02834118,10.6560485 L0.0427459907,10.6560485 L0.0427459907,37.2727472 Z M31.1533366,9.73408188 C27.2777977,9.73408188 23.8101024,11.1493841 21.3501585,14.2733548 L21.3501585,10.568507 L13.3352852,10.568507 L13.3352852,37.27304 L21.3501585,37.27304 L21.3501585,22.8319219 C21.3501585,19.7799753 24.1462147,16.8026877 27.6484581,16.8026877 C31.1507016,16.8026877 32.0144048,19.7799753 32.0144048,22.7572628 L32.0144048,37.270405 L40,37.270405 L40,22.1629179 C39.9997072,11.6690699 35.0315105,9.73408188 31.1533366,9.73408188 Z M3.99821404,7.99613529 C6.20519539,7.99613529 7.99642807,6.20490261 7.99642807,3.99792126 C7.99642807,1.7909399 6.20519539,0 3.99821404,0 C1.79123268,0 0,1.79123268 0,3.99821404 C0,6.20519539 1.79123268,7.99613529 3.99821404,7.99613529 Z"
                                    id="Shape"
                                />
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
    color: PropTypes.string,
};

Linkedin.defaultProps = {
    className: undefined,
    style: undefined,
    color: undefined,
};

export default Linkedin;
