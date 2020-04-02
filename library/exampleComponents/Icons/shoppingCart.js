import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="24px"
            height="23px"
            viewBox="0 0 24 23"
            version="1.1"
        >
            <g id="components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                    id="Components-BadgeOverlay"
                    transform="translate(-638.000000, -1777.000000)"
                    fill="#A8ACB3"
                    fill-rule="nonzero"
                >
                    <path
                        d="M647.741641,1794.5167 C649.048624,1794.5167 650.108186,1795.57633 650.108186,1796.88372 C650.106781,1798.18997 649.048087,1799.24859 647.741641,1799.25 C646.434485,1799.25 645.374887,1798.1904 645.374887,1796.88325 C645.374887,1795.57626 646.434521,1794.5167 647.741641,1794.5167 Z M655.579603,1794.5167 C656.886803,1794.5167 657.946382,1795.57635 657.946148,1796.88345 C657.946148,1798.19066 656.886497,1799.25023 655.57908,1799.25 C654.272866,1799.24836 653.214488,1798.18991 653.212849,1796.88345 C653.212849,1795.5763 654.272447,1794.5167 655.579603,1794.5167 Z M647.741641,1795.76746 C647.12518,1795.76746 646.625648,1796.26699 646.625648,1796.88318 C646.626333,1797.49925 647.125686,1797.99855 647.741641,1797.99924 C648.357919,1797.99924 648.857424,1797.49968 648.857424,1796.88325 C648.857424,1796.26699 648.357893,1795.76746 647.741641,1795.76746 Z M655.579394,1795.76746 C654.963622,1795.76832 654.464295,1796.2677 654.46361,1796.88345 C654.46361,1797.49965 654.9633,1797.99924 655.579603,1797.99924 C656.19587,1797.99924 656.695557,1797.4995 656.695386,1796.88325 C656.695386,1796.26705 656.195697,1795.76746 655.579394,1795.76746 Z M641.664188,1777.75 C642.784662,1777.74565 643.763849,1778.48008 644.086131,1779.54216 L644.131484,1779.71252 L644.164377,1779.88479 L644.341,1781 L660.825719,1781.00047 C660.960539,1781.00047 661.089811,1781.04396 661.195939,1781.12188 L661.270921,1781.18662 L661.335575,1781.26343 C661.410107,1781.36835 661.449913,1781.49274 661.448882,1781.63152 L661.440316,1781.73822 L661.416584,1781.83087 L659.287646,1787.97532 C658.975938,1788.87374 658.189863,1789.51546 657.253644,1789.65096 L657.076423,1789.67038 L656.896788,1789.67695 L645.714,1789.676 L645.977125,1791.33552 C646.052802,1791.82645 646.404406,1792.21893 646.856082,1792.35847 L646.981615,1792.39014 L647.111318,1792.40858 L647.240784,1792.41419 L658.444815,1792.41419 C658.790109,1792.41419 659.070196,1792.69417 659.070196,1793.03957 C659.070196,1793.30474 658.903798,1793.53581 658.646245,1793.62815 L658.545537,1793.65607 L658.444815,1793.66499 L647.241759,1793.66499 C646.121284,1793.66934 645.142098,1792.93491 644.819815,1791.87283 L644.774463,1791.70247 L644.741574,1791.53022 L642.92882,1780.07946 C642.846271,1779.54379 642.4354,1779.12549 641.92435,1779.02484 L641.794633,1779.00641 L641.665163,1779.0008 L639.375381,1779.0008 C639.029929,1779.0008 638.75,1778.72087 638.75,1778.37542 C638.75,1778.11022 638.916304,1777.87916 639.173892,1777.78683 L639.274619,1777.75891 L639.375381,1777.75 L641.664188,1777.75 Z M659.947,1782.251 L644.539,1782.251 L645.516,1788.426 L656.896708,1788.42619 C657.354736,1788.42604 657.773284,1788.18169 657.997391,1787.80165 L658.058635,1787.68368 L658.105948,1787.56561 L659.947,1782.251 Z"
                        id="shopping-car"
                    />
                </g>
            </g>
        </svg>
    );
};

ShoppingCart.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ShoppingCart.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ShoppingCart;
