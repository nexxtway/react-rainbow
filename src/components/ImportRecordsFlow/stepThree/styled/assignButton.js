import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledAssignButton = styled.button.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return {
        brandMainColor,
    };
})`
    font: inherit;
    background: transparent;
    border: none;
    color: ${props => props.brandMainColor};
    cursor: pointer;
    font-size: 14px;
    outline: none;
    text-align: center;
    text-decoration: underline;
    vertical-align: middle;
    white-space: normal;
    user-select: none;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;
    box-sizing: border-box;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

export default StyledAssignButton;
