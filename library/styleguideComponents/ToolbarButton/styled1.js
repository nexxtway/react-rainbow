import styled from 'styled-components';
import ButtonIcon from '../../../src/components/ButtonIcon';

export const GitterButtonIcon = styled(ButtonIcon)`
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    z-index: 6000;

    @media (max-width: 800px) {
        bottom: 12px;
        right: 12px;
    }

    svg {
        width: 36px !important;
        height: 35px !important;
        color: #fff;
    }
`;

export const HamburgerButtonIcon = styled(ButtonIcon)`
    position: fixed;
    top: 8px;
    right: 8px;
    z-index: 6000;
    display: none;

    @media (max-width: 800px) {
        display: inline-block;
    }
`;

export const TwitterLink = styled.a`
    height: 32px;
    width: 32px;
    border-radius: 32px;
    background-color: #d7dae8;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.05s ease;
    position: absolute;
    bottom: 24px;
    left: 34px;

    &:hover,
    &:focus,
    &:active {
        background-color: rgb(29, 161, 242);
        transition: all 0.05s ease;
        border-radius: 36px;
        height: 36px;
        width: 36px;
        bottom: 22px;
        left: 32px;
    }
`;
