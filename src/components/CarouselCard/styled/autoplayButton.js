import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledAutoplayButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
`;

export default StyledAutoplayButton;
