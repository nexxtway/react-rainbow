import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledLi = styled.li.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
    };
})`
    position: relative;
    margin-bottom: 1.375rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    box-sizing: border-box;

    :last-child {
        margin-bottom: 0;
    }

    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                right: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${props.brandMainColor};
                border-radius: 100px;
        `};
`;

export default StyledLi;
