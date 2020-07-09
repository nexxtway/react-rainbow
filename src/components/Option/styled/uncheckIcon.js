import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CloseIcon from '../../Modal/closeIcon';

const StyledUncheckIcon = attachThemeAttrs(styled(CloseIcon))`
    width: 0.8rem;
    height: 0.8rem;
    line-height: 1;
    margin-left: 0.75rem;
    flex-shrink: 0;
    color: ${props => props.palette.border.main};
`;

export default StyledUncheckIcon;
