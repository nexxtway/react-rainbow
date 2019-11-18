import styled from 'styled-components';

const StyledSelectedValueIcon = styled.span`
    width: 2.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    line-height: 2.5rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    :not(button) {
        pointer-events: none;
    }

    ${props =>
        props.readOnly &&
        `
            width: 24px;
        `};
`;

export default StyledSelectedValueIcon;
