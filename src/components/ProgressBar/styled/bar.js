import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledBar = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { brand, success } = theme.palette;
    const { main: brandMainColor } = brand;
    const { main: successMainColor } = success;

    return {
        brandMainColor,
        successMainColor,
    };
})`
    display: block;
    background: ${props => replaceAlpha(props.brandMainColor, 0.7)};
    height: 100%;
    border-radius: 1rem;
    ${props =>
        props.variant === 'success' &&
        `
            background: ${replaceAlpha(props.successMainColor, 0.7)};
        `};
`;

export default StyledBar;
