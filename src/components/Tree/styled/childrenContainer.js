import styled from 'styled-components';

const ChildrenContainer = styled.div`
    margin-left: 40px;
    margin-top: 2px;
    margin-bottom: 2px;

    ${props =>
        props.icon &&
        `
        margin-left: 48px;
    `};
    ${props =>
        props.isChecked === false &&
        `
        margin-left: 56px;
    `};
`;

export default ChildrenContainer;
