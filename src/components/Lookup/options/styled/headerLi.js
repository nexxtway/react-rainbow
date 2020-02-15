import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledHeaderLi = attachThemeAttrs(styled.li)`
    display: flex;
    align-items: center;
    color: ${props => props.palette.text.header};
    font-size: 14px;
    font-weight: normal;
    height: 48px;
    padding: 0 1rem 0 1rem;
    text-transform: uppercase;
`;

export default StyledHeaderLi;
