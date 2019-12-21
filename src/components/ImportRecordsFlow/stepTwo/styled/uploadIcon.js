import styled from 'styled-components';
import UploadIcon from '../../icons/upload';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledUploadIcon = styled(UploadIcon).attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor } = brand;
    const brandMainContrastText = getContrastText(brandMainColor);

    return {
        brandMainContrastText,
    };
})`
    fill: ${props => props.brandMainContrastText};
    color: ${props => props.brandMainContrastText};
    margin-right: 12px;
`;

export default StyledUploadIcon;
