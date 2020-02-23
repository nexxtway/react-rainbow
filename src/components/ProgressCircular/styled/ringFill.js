import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledRingFill = attachThemeAttrs(styled.circle)`
    stroke: ${props => props.palette.brand.main};
    transition: all 0.4s ease-out 0s;
    ${props =>
        props.variant === 'success' &&
        `
            stroke: ${props.palette.success.main};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            stroke: ${props.palette.warning.main};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            stroke: ${props.palette.error.main};
        `};
`;

export default StyledRingFill;
