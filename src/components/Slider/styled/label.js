import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const labelAlignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

const StyledLabel = attachThemeAttrs(styled.label)`
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
        props.hideLabel &&
        `
            position: absolute !important;
            margin: -1px !important;
            border: 0 !important;
            padding: 0 !important;
            width: 1px !important;
            height: 1px !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            text-transform: none !important;
            white-space: nowrap !important;
        `};
`;

export default StyledLabel;
