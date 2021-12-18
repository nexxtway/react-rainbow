import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLabel = attachThemeAttrs(styled.span)`
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    color: ${props => props.palette.text.label};
    margin-top: ${MARGIN_XX_SMALL};
    position: absolute;
    display: inline;
    top: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-align: center;
    ${props =>
        props.stepState === 'Active' &&
        `
            color: ${props.palette.brand.main};
        `};
    ${props =>
        props.stepState === 'Error' &&
        `
            color: ${props.palette.error.main};
        `};
`;

export default StyledLabel;
