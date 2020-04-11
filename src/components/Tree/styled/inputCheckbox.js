import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import PrimitiveCheckbox from '../../PrimitiveCheckbox';

const InputCheckbox = attachThemeAttrs(styled(PrimitiveCheckbox))`
    margin-right: 8px;
`;

export default InputCheckbox;
