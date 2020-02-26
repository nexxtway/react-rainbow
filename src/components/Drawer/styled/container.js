import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const getSize = (size, slideFrom) => {
    const percents = {
        small: 30,
        medium: 60,
        large: 100,
    };

    if (['left', 'right'].includes(slideFrom)) {
        return {
            width: percents[size],
            height: 100,
        };
    }

    return {};
};

const getPosition = slideFrom => {
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

    return {
        ...positions[slideFrom],
    };
};

const StyledContainer = attachThemeAttrs(styled.div).attrs(props => {
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
    z-index: 1000000;
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
            
    // position
    left: ${props => props.position.left};
    top: ${props => props.position.top};
    right: ${props => props.position.right};
    bottom: ${props => props.position.bottom};
    
    // animations
    ${props =>
        props.isOpen &&
        `
            animation: slide-${props.slideFrom}-in 0.2s linear;
            transform: translateX(0%);
        `};
    ${props =>
        !props.isOpen &&
        `
            animation: slide-${props.slideFrom}-out 0.2s linear;
            transform:  ${props.slideFrom === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
        `};

    // slide from left animation
    @keyframes slide-left-in {
        0% {
            transform:  translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes slide-left-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform:  translateX(-100%);
        }
    }

    // slide from right animation
    @keyframes slide-right-in {
        0% {
            transform:  translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes slide-right-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform:  translateX(100%);
        }
    }

`;

export default StyledContainer;
