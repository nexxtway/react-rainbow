import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const Label = attachThemeAttrs(styled.label)`
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: center;
    box-sizing: border-box;

    :empty {
        margin: 0;
    }

    ${props =>
        props.labelAlignment === 'left' &&
        `
            align-self: flex-start;
            margin-left: 1rem;
        `};
    ${props =>
        props.labelAlignment === 'right' &&
        `
            align-self: flex-end;
            margin-right: 1rem;
        `};
    ${props => props.readOnly && 'align-self: flex-start;'};
`;

export default Label;
