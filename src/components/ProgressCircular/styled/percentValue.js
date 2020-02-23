import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledPercentValue = attachThemeAttrs(styled.h1)`
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.palette.brand.main};
    margin: 0;
    padding: 0;
    ${props =>
        props.variant === 'success' &&
        `
            color: ${props.palette.success.main};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${props.palette.warning.main};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.palette.error.main};
        `};
`;

export default StyledPercentValue;
