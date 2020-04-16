import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEventDates = attachThemeAttrs(styled.p)`
    font-size: 0.5rem;
    margin-top: -2px;
    color: ${props => props.palette.brand.main};
`;

export default StyledEventDates;
