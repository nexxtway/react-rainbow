import styled from 'styled-components';
import { COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { MARGIN_XX_SMALL } from '../../../styles/margins';
import getTheme from '../../../styles/helpers/getTheme';

const StyledLabel = styled.span.attrs(props => {
    const palette = getTheme(props).palette;
    const brandMainColor = palette.brand.main;
    const errorMainColor = palette.error.main;
    return {
        brandMainColor,
        errorMainColor,
    };
})`
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    color: ${COLOR_GRAY_3};
    margin-top: ${MARGIN_XX_SMALL};
    position: absolute;
    display: inline-table;
    top: 100%;
    ${props =>
        props.stepState === 'Active' &&
        `
            color: ${props.brandMainColor};
        `};
    ${props =>
        props.stepState === 'Error' &&
        `
            color: ${props => props.errorMainColor};
        `};
`;

export default StyledLabel;
