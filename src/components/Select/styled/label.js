import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL, MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLabel = styled.label`
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-right: ${MARGIN_SMALL};
    margin-bottom: ${MARGIN_XX_SMALL};
    align-self: center;

    &:empty {
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
