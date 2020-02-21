import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitle = attachThemeAttrs(styled.h2)`
    color: ${props => props.palette.brand.main};
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
`;

export default StyledTitle;
