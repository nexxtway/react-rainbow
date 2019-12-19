import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_1 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledOptionLabel = styled.label.attrs(props => {
    const brandDarkColor = getTheme(props).palette.brand.dark;

    return {
        brandDarkColor,
    };
})`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${COLOR_GRAY_TRANSPARENT_1};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.brandDarkColor};
        border-radius: 4px;
    }

    @media (max-width: 340px) {
        font-size: 22px;
    }
`;

export default StyledOptionLabel;
