import styled from 'styled-components';

const StyledOverflow = styled.div`
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
        max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    ${props =>
        props.isExpanded &&
        `
            opacity: 1;
            transition:
                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        `};
`;

export default StyledOverflow;
