import styled from 'styled-components';
import TrashIcon from '../../icons/trash';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledIcon = styled(TrashIcon).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return {
        brandMainColor,
    };
})`
    fill: ${props => props.brandMainColor};
    color: ${props => props.brandMainColor};
`;

export default StyledIcon;
