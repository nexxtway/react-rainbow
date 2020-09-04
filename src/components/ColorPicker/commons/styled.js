import styled, { css } from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const CssInput = css`
    line-height: 1.5rem;
    height: 1.5rem;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    text-align: center;
`;

export const CssCircleColor = css`
    border-radius: 50%;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledPreview = attachThemeAttrs(styled.div)`
    width: 40px;
    height: 40px;
    margin: 10px 0;
    ${CssCircleColor}
`;
