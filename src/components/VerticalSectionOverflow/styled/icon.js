import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledIcon = styled.svg.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};
    margin-left: 0.5rem;
    margin-top: 0.625rem;
    transform: rotate(0deg);
    transition: transform 0.15s linear;
    ${props =>
        props.isExpanded &&
        `
            transform: rotate(-180deg);
            transition: transform 0.15s linear;
        `};
`;

export default StyledIcon;
