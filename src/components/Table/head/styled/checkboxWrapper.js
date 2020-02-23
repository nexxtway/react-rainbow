import styled from 'styled-components';
import StyledWrapper from './wrapper';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCheckboxWrapper = attachThemeAttrs(styled(StyledWrapper))`
    align-items: center;
    display: flex;
    padding: 0 15px;
    border: 1px solid transparent;
`;

export default StyledCheckboxWrapper;
