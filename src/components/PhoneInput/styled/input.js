import styled from 'styled-components';
import Input from '../../Input/styled/input';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInput = attachThemeAttrs(styled(Input))`
    padding-left: 50px;
`;

export default StyledInput;
