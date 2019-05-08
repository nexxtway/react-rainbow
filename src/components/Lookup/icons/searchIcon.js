import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="re-design-layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="re-design-layout-componentes-V2"
                    transform="translate(-393.000000, -173.000000)"
                >
                    <g id="head" transform="translate(381.000000, 106.000000)">
                        <g
                            id="search"
                            transform="translate(20.000000, 75.000000) scale(-1, 1) translate(-20.000000, -75.000000) translate(12.000000, 67.000000)"
                        >
                            <path
                                d="M7.77636719,8.93103028 L7.06896972,8.22363281 C6.97131347,8.12597656 6.81286622,8.12597656 6.71520997,8.22363281 L5.08947753,9.84936525 C4.99182128,9.9470215 4.99182128,10.1053467 5.08947753,10.203125 L5.796875,10.9105225 C5.84582519,10.9593506 5.90979003,10.9837647 5.97375488,10.9837647 C6.03784181,10.9837647 6.10180663,10.9593506 6.15063475,10.9105225 L7.77648925,9.28479003 C7.8741455,9.18713378 7.8741455,9.02868653 7.77636719,8.93103028 Z"
                                id="Path"
                                fill="#E3E5ED"
                            />
                            <path
                                d="M10.7474365,0 C7.85119628,0 5.49499513,2.35620119 5.49499513,5.25256347 C5.49499513,8.14880372 7.85119628,10.5050049 10.7474365,10.5050049 C13.6437988,10.5050049 16,8.14880372 16,5.25256347 C16,2.35620119 13.6437988,8.8817842e-16 10.7474365,0 Z"
                                id="Path"
                                fill="#A4A7B5"
                            />
                            <path
                                d="M10.7474365,0.937988281 C8.36840819,0.937988281 6.43286131,2.87341309 6.43286131,5.25256347 C6.43286131,7.63159181 8.36840819,9.56713869 10.7474365,9.56713869 C13.1265869,9.56713869 15.0620117,7.63159181 15.0620117,5.25256347 C15.0620117,2.87341309 13.1265869,0.937988281 10.7474365,0.937988281 Z"
                                id="Path"
                                fill="#E3E5ED"
                            />
                            <path
                                d="M6.67236328,10.5656738 L5.43432619,9.32763672 C5.33666994,9.22998047 5.17822266,9.22998047 5.08056641,9.32763672 L0.328369125,14.0799561 C-0.003662125,14.4118652 -0.0950927812,14.9312744 0.105712875,15.3562012 C0.16101075,15.4732666 0.236816406,15.5802002 0.328369125,15.6716309 C0.647460938,15.9908447 1.1501465,16.0886231 1.56555175,15.9118652 C1.69775391,15.8555908 1.81848144,15.7731934 1.92004394,15.6716309 L6.67236328,10.9194336 C6.77001953,10.8217773 6.77001953,10.6633301 6.67236328,10.5656738 Z"
                                id="Path"
                                fill="#01B6F5"
                            />
                            <path
                                d="M6.67236328,10.5656738 L6.04699706,9.94042969 C6.14477538,10.0380859 6.14477538,10.1964111 6.04699706,10.2940674 L1.29479981,15.0463867 C1.19323731,15.1479492 1.07250975,15.2302246 0.940307625,15.286499 C0.664794937,15.4038086 0.351196281,15.3996582 0.0780029375,15.2908936 C0.0865478437,15.3128662 0.095459,15.3347168 0.105712875,15.3562012 C0.16101075,15.4732666 0.236816406,15.5802002 0.328369125,15.6716309 C0.647460938,15.9908447 1.1501465,16.0886231 1.56555175,15.9118653 C1.69775391,15.8555908 1.81848144,15.7731934 1.92004394,15.6716309 L6.67236328,10.9194336 C6.77001953,10.8217773 6.77001953,10.6633301 6.67236328,10.5656738 Z"
                                id="Path"
                                fill="#009ACF"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

SearchIcon.propTypes = {
    className: PropTypes.string,
};

SearchIcon.defaultProps = {
    className: undefined,
};

export default SearchIcon;
