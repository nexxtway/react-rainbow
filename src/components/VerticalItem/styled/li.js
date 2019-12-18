import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledLi = styled.li.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    position: relative;
    box-sizing: border-box;
    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                left: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${props.brandMainColor};
            }
        `};
`;

export default StyledLi;
