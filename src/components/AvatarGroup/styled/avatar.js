import styled from 'styled-components';
import Avatar from '../../Avatar';

const StyledAvatar = styled(Avatar)`
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
        `}
    ${props =>
        props.size === 'large' &&
        `
            margin-left: -1.6rem;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            margin-left: -1.25rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            margin-left: -0.75rem;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            margin-left: -0.625rem;
        `};
`;

export default StyledAvatar;
