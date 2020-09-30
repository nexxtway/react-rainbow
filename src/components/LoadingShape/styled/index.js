import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import AvatarIcon from '../icons/avatar';
import ImageIcon from '../icons/image';

const StyledShapeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledImageIcon = styled(ImageIcon)`
    ${props =>
        props.shape === 'square' &&
        `
        width: 85%;
        `}

    ${props =>
        props.shape === 'circle' &&
        `
        width: 60%;
        `}

    ${props =>
        (props.shape === 'rect' || props.shape === 'rounded-rect') &&
        `
        max-width: 25%;
        height: 80%;
        `}
`;

const StyledAvatarIcon = styled(AvatarIcon)`
    ${props =>
        props.shape === 'square' &&
        `
        width: 85%;
        `}

    ${props =>
        props.shape === 'circle' &&
        `
        width: 60%;
        `}

    ${props =>
        (props.shape === 'rect' || props.shape === 'rounded-rect') &&
        `
        max-width: 25%;
        height: 80%;
        `}
`;

const StyledLoadingShape = attachThemeAttrs(styled.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.palette.background.secondary}
        linear-gradient(
            90deg,
            rgba(226, 228, 233, 0.01) 0%,
            rgba(226, 228, 233, 0.85) 50%,
            rgba(226, 228, 233, 0.01) 100%
        );
    background-size: 400% 400%;
    animation: gradient 2.5s ease-in-out infinite;

    @keyframes gradient {
        0% {
            background-position: 14% 0;
        }

        50% {
            background-position: 87% 100%;
        }

        100% {
            background-position: 14% 0;
        }
    }

    ${props =>
        (props.shape === 'rect' || props.shape === 'rounded-rect') &&
        `
        min-height: 12px;
        min-width: 92px;
        height: 100%;
        `}
    
    ${props =>
        (props.shape === 'circle' || props.shape === 'square') &&
        `
        min-width: 48px;
        min-height: 48px;
        `}

    ${props =>
        (props.variant === 'image' || props.variant === 'avatar') &&
        `
        min-width: 48px;
        min-height: 48px;
        `}

    ${props =>
        props.shape === 'rounded-rect' &&
        `
        border-radius: 1rem;
        `}

    ${props =>
        props.shape === 'circle' &&
        `
        border-radius: 50%;
        `}
`;

export { StyledShapeContainer, StyledImageIcon, StyledAvatarIcon, StyledLoadingShape };
