import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

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
    background: ${props => props.brandLightColor};
    height: 0.5rem;
    border-radius: 1rem;
    ${props => props.size === 'x-small' && 'height: 0.125rem;'}
    ${props => props.size === 'small' && 'height: 0.25rem;'}
    ${props => props.size === 'medium' && 'height: 0.625rem;'}
    ${props => props.size === 'large' && 'height: 1rem;'}
    ${props =>
        props.variant === 'success' &&
        `
            background: ${props.successLightColor};
        `};
`;

export default StyledContainer;
