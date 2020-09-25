import styled from 'styled-components';

const LabelContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    ${props =>
        props.labelAlignment === 'left' &&
        `
            justify-content: flex-start;
        `};
    ${props =>
        props.labelAlignment === 'right' &&
        `
            justify-content: flex-end;
        `};
    ${props =>
        props.readOnly &&
        `
            justify-content: flex-start;
            padding-left: 0;
        `};
`;

export default LabelContainer;
