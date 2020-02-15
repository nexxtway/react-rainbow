import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledArrowButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
    ${props =>
        props.disabled &&
        `
            color: ${props.palette.text.disabled};
        `};
`;

export default StyledArrowButton;
