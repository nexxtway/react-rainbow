import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledMonth = attachThemeAttrs(styled.h3)`
    color: ${props => props.palette.brand.main};
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 1.5rem;
    min-width: 250px;
    text-transform: capitalize;
`;

export default StyledMonth;
