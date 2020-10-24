import styled from 'styled-components';
import Label from '../../Input/label';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLabel = attachThemeAttrs(styled(Label))`
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${props.palette.isDark ? '#576574' : 'rgb(178,178,178)'}
        `};
`;

export default StyledLabel;
