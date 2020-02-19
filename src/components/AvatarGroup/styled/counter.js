import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledContainer from '../../Avatar/styled/container';

const StyledCounter = attachThemeAttrs(styled(StyledContainer))`
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.palette.background.main};
`;

export default StyledCounter;
