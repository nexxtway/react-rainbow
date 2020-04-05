import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledMonth = attachThemeAttrs(styled.h3)`
    color: ${props => props.palette.brand.main};
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 1.5rem;
    min-width: 220px;
    text-transform: capitalize;
    font-weight: 300;
`;

export default StyledMonth;
