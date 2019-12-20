import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledInnerContainer = styled.div.attrs(props => {
    const { brand, error } = getTheme(props).palette;
    const brandMainColor = brand.main;
    const errorMainColor = error.main;
    return {
        brandMainColor,
        errorMainColor,
    };
})`
    position: relative;

    ::after {
        content: '';
        position: absolute;
        display: block;
        right: 1rem;
        bottom: 45%;
        pointer-events: none;
        width: 0.5rem;
        height: 0.5rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        vertical-align: top;
        color: ${props => props.brandMainColor};
        box-sizing: border-box;
    }

    &[disabled]::after {
        color: ${COLOR_GRAY_2};
    }

    ${props =>
        props.error &&
        `
            ::after {
                color: ${props.errorMainColor};
            }
        `};
`;

export default StyledInnerContainer;
