import styled from 'styled-components';
import RightArrow from '../rightArrow';
import getTheme from '../../../styles/helpers/getTheme';

const StyledRightArrow = styled(RightArrow)`
    color: ${props => getTheme(props).palette.brand.main};
`;

export default StyledRightArrow;
