import styled from 'styled-components';
import CloseIcon from '../icons/closeIcon';
import getTheme from '../../../styles/helpers/getTheme';

const StyledCloseIcon = styled(CloseIcon)`
    color: ${props => getTheme(props).palette.brand.main};
`;

export default StyledCloseIcon;
