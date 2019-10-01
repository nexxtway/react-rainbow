import styled from 'styled-components';
import { COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';

const StyledContainer = styled.span`
    background-color: ${COLOR_BRAND};
    color: ${COLOR_WHITE};
    border-radius: 50%;
    display: inline-block;
    height: 2.5rem;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    width: 2.5rem;

    &:hover,
    &:focus {
        color: currentColor;
    }

    ${props =>
        props.size === 'large' &&
        `
            font-size: 1.125rem;
            height: 3.2rem;
            width: 3.2rem;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 1rem;
            height: 2.5rem;
            width: 2.5rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 0.625rem;
            height: 1.5rem;
            width: 1.5rem;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 0.625rem;
            height: 1.25rem;
            width: 1.25rem;
        `};
`;

export default StyledContainer;
