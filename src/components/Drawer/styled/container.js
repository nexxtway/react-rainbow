import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const percents = {
    small: 25,
    medium: 50,
    large: 75,
};

const positions = {
    left: {
        left: 0,
        top: 0,
        bottom: 0,
    },
    right: {
        right: 0,
        top: 0,
        bottom: 0,
    },
};

const getSize = (size, slideFrom) => {
    if (['left', 'right'].includes(slideFrom)) {
        return {
            width: percents[size],
            height: 100,
        };
    }

    return {};
};

const getPosition = slideFrom => {
    return positions[slideFrom];
};

const StyledContainer = attachThemeAttrs(styled.section).attrs(props => {
    const size = getSize(props.size, props.slideFrom);
    const position = getPosition(props.slideFrom);
    return {
        size,
        position,
    };
})`
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: normal;
    position: fixed;
    padding: 0;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};

    &:focus {
        outline: 0;
    }

    // size
    width: ${props => props.size.width}%;
    min-width: ${props => props.size.width}%;
    height: ${props => props.size.height}%;
    min-height: ${props => props.size.height}%;
    ${props =>
        ['left', 'right'].includes(props.slideFrom) &&
        `
        max-height: ${props.size.height}%;
        `}

    @media (max-width: 800px) {
        width: 100%;
        min-width: 100%;
    }
            
    // position
    left: ${props => props.position.left};
    top: ${props => props.position.top};
    right: ${props => props.position.right};
    bottom: ${props => props.position.bottom};

    // animations
    transition: opacity 0.2s ease-in-out;
    ${props =>
        props.isOpen &&
        `
            animation: drawer-slide-${props.slideFrom}-in 0.2s linear;
            transform: translateX(0%);
            opacity: 1;
        `};
    ${props =>
        !props.isOpen &&
        `
            animation: drawer-slide-${props.slideFrom}-out 0.2s linear;
            transform:  ${props.slideFrom === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
            opacity: 0;
        `};

    // slide from left animation
    @keyframes drawer-slide-left-in {
        0% {
            transform:  translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes drawer-slide-left-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform:  translateX(-100%);
        }
    }

    // slide from right animation
    @keyframes drawer-slide-right-in {
        0% {
            transform:  translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes drawer-slide-right-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform:  translateX(100%);
        }
    }

`;

export default StyledContainer;
