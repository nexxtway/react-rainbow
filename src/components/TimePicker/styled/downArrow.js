import styled from 'styled-components';
import DownArrow from '../icons/downArrow';
import getTheme from '../../../styles/helpers/getTheme';

const StyledDownArrow = styled(DownArrow)`
    color: ${props => getTheme(props).palette.brand.main};
`;

export default StyledDownArrow;
