import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledText from './text';

const StyledLabel = attachThemeAttrs(styled.label)`
    input:focus + span {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
        z-index: 1;
    }
    
    input:hover + span,
    input:focus + span,
    input:active + span {
        color: ${props => props.palette.brand.dark};
    }
    ${props =>
        props.checked &&
        `
        z-index: 10;
        `}
`;

export { StyledLabel, StyledText };
