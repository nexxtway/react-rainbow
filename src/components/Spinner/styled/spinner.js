import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSpinner = attachThemeAttrs(styled.div)`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5000;
    transform: translate(-50%, -50%) rotate(90deg);
    display: block;
    font-size: 0;
    color: #ddd;

    > div {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5000;
        transform: translate(-50%, -50%) rotate(90deg);
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor;
        margin-top: -4px;
        margin-left: -4px;
        border-radius: 100px;
        animation: ball-spin-clockwise 1s infinite ease-in-out;
    }

    > div:nth-child(1) {
        top: 5%;
        left: 50%;
        animation-delay: -0.875s;
        color: #fe4849;
    }

    > div:nth-child(2) {
        top: 18.1801948466%;
        left: 81.8198051534%;
        animation-delay: -0.75s;
        color: #ff6837;
    }

    > div:nth-child(3) {
        top: 50%;
        left: 95%;
        animation-delay: -0.625s;
        color: #f8d832;
    }

    > div:nth-child(4) {
        top: 81.8198051534%;
        left: 81.8198051534%;
        animation-delay: -0.5s;
        color: #c7e46a;
    }

    > div:nth-child(5) {
        top: 94.9999999966%;
        left: 50.0000000005%;
        animation-delay: -0.375s;
        color: #1de9b6;
    }

    > div:nth-child(6) {
        top: 81.8198046966%;
        left: 18.1801949248%;
        animation-delay: -0.25s;
        color: #1ad1a3;
    }

    > div:nth-child(7) {
        top: 49.9999750815%;
        left: 5.0000051215%;
        animation-delay: -0.125s;
        color: #01b6f5;
    }

    > div:nth-child(8) {
        top: 18.179464974%;
        left: 18.1803700518%;
        animation-delay: 0s;
        color: #5c56b6;
    }

    @-webkit-keyframes ball-spin-clockwise {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        20% {
            opacity: 1;
        }

        80% {
            opacity: 0;
            transform: scale(0);
        }
    }

    @-moz-keyframes ball-spin-clockwise {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        20% {
            opacity: 1;
        }

        80% {
            opacity: 0;
            transform: scale(0);
        }
    }

    @-o-keyframes ball-spin-clockwise {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        20% {
            opacity: 1;
        }

        80% {
            opacity: 0;
            transform: scale(0);
        }
    }

    @keyframes ball-spin-clockwise {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        20% {
            opacity: 1;
        }

        80% {
            opacity: 0;
            transform: scale(0);
        }
    }

    ${props =>
        props.size === 'xx-small' &&
        `
            width: 1rem;
            height: 1rem;

            > div {
                width: 0.125rem;
                height: 0.125rem;
            }
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 1.25rem;
            height: 1.25rem;

            > div {
                width: 0.25rem;
                height: 0.25rem;
            }
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 1.625rem;
            height: 1.625rem;

            > div {
                width: 0.375rem;
                height: 0.375rem;
            }
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 2rem;
            height: 2rem;

            > div {
                width: 0.4375rem;
                height: 0.4375rem;
            }
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 3rem;
            height: 3rem;

            > div {
                width: 0.5625rem;
                height: 0.5625rem;
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            > div {
                color: ${props.palette.brand.main} !important;
            }
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            > div {
                color: ${props.palette.getContrastText(props.palette.text.main)} !important;
            }
        `};
    ${props =>
        props.variant === 'neutral' &&
        `
            > div {
                color: ${props.palette.background.highlight} !important;
            }
        `};
`;

export default StyledSpinner;
