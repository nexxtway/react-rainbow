import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';
import CsvIcon from '../../icons/csvIcon';

const StyledIcon = styled(CsvIcon).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    const backgroundColor = getTheme(props).palette.background.main;

    return {
        brandMainColor,
        backgroundColor,
    };
})`
    fill: ${props => props.backgroundColor};
    color: ${props => props.brandMainColor};
`;

export default StyledIcon;
