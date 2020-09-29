import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../styles/fontSizes';

export const StyledContainer = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

export const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin: 0 auto 0.25rem auto;
    text-align: center;
`;

export const StyledOptionsContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
`;
