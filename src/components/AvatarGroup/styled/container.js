/* eslint-disable indent */
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: inline-flex;

    > :not(:first-child) {
        ${props =>
            props.size === 'large' &&
            `
            margin-left: -1.6rem;
            `}
        ${props =>
            props.size === 'medium' &&
            `
            margin-left: -1.25rem;
            `}
        ${props =>
            props.size === 'small' &&
            `
            margin-left: -0.75rem;
            `}
        ${props =>
            props.size === 'x-small' &&
            `
            margin-left: -0.625rem;
            `}
    }
`;

export default StyledContainer;
