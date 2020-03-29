import styled from 'styled-components';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledEvent = attachThemeAttrs(styled.div)`
    text-align: left;
    border: 1px solid ${props => props.palette.border.divider};
    border-left: 3px solid ${props => props.palette.brand.main};
    color: ${props => props.palette.text.main};
    background-color: ${props => props.palette.background.secondary};
    padding: 0;
    padding-left: 2px;
    margin: 2px 0;
    border-radius: 3px;
    height: ${props => props.height}px;

    span {
        display: block;
        font-size: 0.20rem;
        color: ${props => props.palette.brand.main};
    }

    p {
        font-size: ${FONT_SIZE_TEXT_X_SMALL};
        margin-top: -4px;
    }
`;

export default StyledEvent;
