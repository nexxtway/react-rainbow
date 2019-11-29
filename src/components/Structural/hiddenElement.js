import styled from 'styled-components';

const HiddenElement = styled.span`
    position: absolute !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    text-transform: none !important;
    white-space: nowrap !important;
    ${props =>
        props.as === 'input' &&
        `
            box-sizing: border-box;
        `};
    ${props =>
        props.as === 'label' &&
        `
            box-sizing: border-box;
        `};
`;

export default HiddenElement;
