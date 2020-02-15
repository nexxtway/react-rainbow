import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Avatar from '../../Avatar';

const StyledAvatar = attachThemeAttrs(styled(Avatar))`
    border: 2px solid ${props => props.palette.background.main};
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
        `}
`;

export default StyledAvatar;
