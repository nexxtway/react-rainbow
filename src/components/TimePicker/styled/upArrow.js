import styled from 'styled-components';
import UpArrow from '../icons/upArrow';
import getTheme from '../../../styles/helpers/getTheme';

const StyledUpArrow = styled(UpArrow)`
    color: ${props => getTheme(props).palette.brand.main};
`;

export default StyledUpArrow;
