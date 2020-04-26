import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTrigger = attachThemeAttrs(styled.div)`
    height: 100%;
    position: absolute;
    padding-left: 1rem;
    line-height: 2.5rem;
    color: ${props => props.palette.text.header};
    font-weight: 300;
    font-size: ${FONT_SIZE_TEXT_LARGE};

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled};
    `}
`;

export default StyledTrigger;
