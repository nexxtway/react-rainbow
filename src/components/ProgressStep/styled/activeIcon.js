import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import getTheme from '../../../styles/helpers/getTheme';

const StyledActiveIcon = styled.div.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${BORDER_RADIUS_2};
    border: 0.375rem solid ${props => props.brandMainColor};
    box-sizing: border-box;
`;

export default StyledActiveIcon;
