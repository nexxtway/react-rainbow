import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import ErrorText from '../../Input/styled/errorText';

const StyledTextError = attachThemeAttrs(styled(ErrorText))`
    text-align: center;
`;

export default StyledTextError;
