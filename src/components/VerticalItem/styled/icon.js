import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledIcon = styled.span.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    align-items: center;
    color: ${props => props.brandMainColor};
    display: flex;
    line-height: 1;
    height: 100%;
    position: absolute;
    top: 0;
    left: 1.25rem;
`;

export default StyledIcon;
