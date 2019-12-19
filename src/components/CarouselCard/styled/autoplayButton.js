import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import getTheme from '../../../styles/helpers/getTheme';

const StyledAutoplayButton = styled(ButtonIcon).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};
`;

export default StyledAutoplayButton;
