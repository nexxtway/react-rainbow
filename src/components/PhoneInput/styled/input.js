import styled from 'styled-components';
import Input from '../../Input/styled/input';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInput = attachThemeAttrs(styled(Input))`
    padding-left: 7rem;

    :focus,
    :active {
        padding-left: 6.9375rem;
    }
`;

export default StyledInput;
