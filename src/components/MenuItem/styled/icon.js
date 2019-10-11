import styled from 'styled-components';

const StyledIcon = styled.span`
    width: 1rem;
    height: 1rem;
    line-height: 1.5;
    fill: white;
    ${props =>
        props.position === 'left' &&
        `
            margin-right: 0.75rem;
            flex-shrink: 0;
        `};
    ${props =>
        props.position === 'right' &&
        `
                margin-left: 0.75rem;
                flex-shrink: 0;
            `};
`;

export default StyledIcon;
