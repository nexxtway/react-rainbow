import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledContainer = styled.div.attrs(props => {
    const theme = getTheme(props);
    const { brand, success } = theme.palette;
    const { light: brandLightColor } = brand;
    const { light: successLightColor } = success;

    return {
        brandLightColor,
        successLightColor,
    };
})`
    width: 100%;
    border: 0;
    position: relative;
    display: block;
    background: ${props => replaceAlpha(props.brandLightColor, 0.7)};
    height: 0.5rem;
    border-radius: 1rem;
    ${props => props.size === 'x-small' && 'height: 0.125rem;'}
    ${props => props.size === 'small' && 'height: 0.25rem;'}
    ${props => props.size === 'medium' && 'height: 0.625rem;'}
    ${props => props.size === 'large' && 'height: 1rem;'}
    ${props =>
        props.variant === 'success' &&
        `
            background: ${replaceAlpha(props.successLightColor, 0.7)};
        `};
`;

export default StyledContainer;
