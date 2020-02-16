import React from 'react';
import PropTypes from 'prop-types';
import isValidColor from '../../../src/styles/helpers/color/isValidColor';

const Twitter = props => {
    const { className, style, color } = props;
    return (
        <svg
            className={className}
            style={style}
            width="40px"
            height="33px"
            viewBox="0 0 40 33"
            version="1.1"
        >
            <title>icon-twitter</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Button-Group"
                    transform="translate(-683.000000, -1411.000000)"
                    fill={isValidColor(color) ? color : '#00b0f3'}
                    fillRule="nonzero"
                >
                    <g id="Group-178" transform="translate(224.000000, 1305.000000)">
                        <g id="Group-176">
                            <g id="tile/social-copy-2" transform="translate(447.000000, 72.000000)">
                                <g id="tile/social">
                                    <g
                                        id="icon-twitter"
                                        transform="translate(12.000000, 34.000000)"
                                    >
                                        <path
                                            d="M35.8884214,8.09643788 C35.9138122,8.45175176 35.9138122,8.80714378 35.9138122,9.16245767 C35.9138122,20 27.6651081,32.4873925 12.5888773,32.4873925 C7.94417166,32.4873925 3.6294673,31.1421529 0,28.8072219 C0.659924453,28.883316 1.29438006,28.9087067 1.97969523,28.9087067 C5.81213208,28.9087067 9.34011461,27.6143266 12.1573912,25.406193 C8.55331466,25.3300208 5.53299036,22.969621 4.4923613,19.7208583 C5.00001953,19.7969523 5.50759964,19.8477338 6.0406486,19.8477338 C6.7766671,19.8477338 7.51276372,19.7461709 8.19800077,19.5685921 C4.44165798,18.8071047 1.62430322,15.5076387 1.62430322,11.5228575 L1.62430322,11.4213727 C2.71563561,12.0305157 3.98478119,12.4112204 5.32986457,12.4619237 C3.12173094,10.9898086 1.67508467,8.47714249 1.67508467,5.63447513 C1.67508467,4.11165669 2.08110188,2.71571373 2.79180778,1.49742772 C6.82737042,6.47205653 12.8934097,9.7207411 19.6953894,10.0761331 C19.5685139,9.46699011 19.4923418,8.8325345 19.4923418,8.19800077 C19.4923418,3.68017063 23.1471998,0 27.6903425,0 C30.0507424,0 32.1827038,0.989847617 33.6802097,2.58883824 C35.5329513,2.23352435 37.3095989,1.54820917 38.8832769,0.609143004 C38.2740558,2.51274419 36.9796757,4.11173481 35.2792003,5.12689503 C36.9289724,4.94931621 38.527963,4.4923613 40,3.85790569 C38.8834331,5.48220891 37.4874121,6.92885519 35.8884214,8.09643788 Z"
                                            id="twitter"
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

Twitter.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
};

Twitter.defaultProps = {
    className: undefined,
    style: undefined,
    color: undefined,
};

export default Twitter;
