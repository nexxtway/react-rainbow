import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_MEDIUM } from '../../../styles/margins';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const labelAlignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

const Label = attachThemeAttrs(styled.label)`
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: ${props => labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center};
    box-sizing: border-box;

    :empty {
        margin: 0;
    }

    ${props =>
        props.labelAlignment === 'left' &&
        `
            margin-left: ${MARGIN_MEDIUM};
        `};
    ${props =>
        props.labelAlignment === 'right' &&
        `
            margin-right: ${MARGIN_MEDIUM};
        `};
    ${props =>
        props.as === 'legend' &&
        `
            text-align: ${
                Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment)
                    ? props.labelAlignment
                    : 'center'
            }
            margin-left: 0;
            margin-right: 0;
            padding: 0 ${PADDING_MEDIUM};
        `};
    ${props =>
        props.readOnly &&
        `
            align-self: flex-start;
            margin-left: 0;
        `};
`;

export default Label;
