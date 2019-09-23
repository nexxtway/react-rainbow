import styled from 'styled-components';
import { COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_2, COLOR_GRAY_4 } from '../../styles/colors';

const StyledBadge = styled.span`
    color: ${COLOR_GRAY_4};
    background-color: ${COLOR_GRAY_2};
    border: 1px solid;
    border-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    padding: 0.25rem 0.75rem;
    border-radius: 12rem;
    overflow: hidden;

    & + & {
        margin-left: 0.5rem;
    }

    ${props =>
        props.variant === 'lightest' &&
        `
            background-color: ${COLOR_WHITE};
            border-color: ${COLOR_GRAY_2};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${COLOR_WHITE};
            background-color: ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            color: ${COLOR_BRAND};
            background-color: transparent;
            border-color: ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${COLOR_WHITE};
            background-color: ${COLOR_GRAY_4};
        `};
`;

export default StyledBadge;
