import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL, FONT_SIZE_HEADING_SMALL } from '../../styles/fontSizes';

export const StyledContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

export const StyledDescription = attachThemeAttrs(styled.h2)`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    color: ${props => props.palette.text.label};
    text-align: center;
`;

export const StyledLabel = attachThemeAttrs(styled.h1)`
    margin: 0;
    padding: 0;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${props => props.palette.text.main};
    text-align: center;
    font-weight: 300;
`;
