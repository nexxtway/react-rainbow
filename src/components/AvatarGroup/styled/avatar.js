import styled from 'styled-components';
import Avatar from '../../Avatar';

const StyledAvatar = styled(Avatar)`
    border: 1px solid white;
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
        `}
`;

export default StyledAvatar;
