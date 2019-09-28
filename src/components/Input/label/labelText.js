import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const Label = styled.label`
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: center;

    :empty {
        margin: 0;
    }

    ${props => props.readOnly && 'align-self: flex-start;'};
`;

export default Label;
