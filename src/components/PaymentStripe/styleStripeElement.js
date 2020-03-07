import React from 'react';
import PropTypes from 'prop-types';
import { BORDER_RADIUS_2 } from '../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../styles/fontSizes';

const StyleStripeElement = props => {
    const { theme } = props;
    return (
        <style jsx="true">{`
            .StripeElement {
                font: inherit;
                background-color: ${theme.palette.background.main};
                border: 1px solid ${theme.palette.border.main};
                border-radius: ${BORDER_RADIUS_2};
                width: 100%;
                transition: all 0.1s linear, padding 0s, border 0s;
                display: inline-block;
                padding: 0 1rem;
                padding-top: 0.7rem;
                line-height: 2.5rem;
                height: 2.5rem;
                color: ${theme.palette.text.main};
                font-size: ${FONT_SIZE_TEXT_LARGE};
                box-sizing: border-box;
                margin: 0;
            }

            .StripeElement--focus {
                outline: 0;
                padding: 0 0.9375rem;
                padding-top: 0.6562rem;
                border: 2px solid ${theme.palette.brand.main};
                background-color: ${theme.palette.background.main};
                box-shadow: ${theme.shadows.brand};
            }

            .StripeElement--invalid {
                background-color: ${theme.palette.background.main};
                border: 2px solid ${theme.palette.error.main};
                box-shadow: ${theme.shadows.error};
                outline: 0;
            }

            .StripeElement--webkit-autofill {
                background-color: ${theme.palette.background.main} !important;
            }
        `}</style>
    );
};

StyleStripeElement.propTypes = {
    theme: PropTypes.object,
};

StyleStripeElement.defaultProps = {
    theme: null,
};

export default StyleStripeElement;
