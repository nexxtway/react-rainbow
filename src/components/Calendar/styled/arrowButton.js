import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import getTheme from '../../../styles/helpers/getTheme';

const StyledArrowButton = styled(ButtonIcon).attrs(props => {
    const palette = getTheme(props).palette;
    const brandMainColor = palette.brand.main;
    const disabledText = palette.text.disabled;
    return {
        brandMainColor,
        disabledText,
    };
})`
    color: ${props => props.brandMainColor};
    ${props =>
        props.disabled &&
        `
            color: ${props.disabledText};
        `};
`;

export default StyledArrowButton;
