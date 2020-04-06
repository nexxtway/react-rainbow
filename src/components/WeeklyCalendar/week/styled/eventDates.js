import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEventDates = attachThemeAttrs(styled.p)`
    font-size: 0.25rem;
    margin-top: -1px;
    color: ${props => props.palette.brand.main};
`;

export default StyledEventDates;
