import styled from 'styled-components';
import { MARGIN_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import getTheme from '../../../styles/helpers/getTheme';

const StyledIconContainer = styled.div.attrs(props => {
    const theme = getTheme(props);
    const { brand, success, error, warning } = theme.palette;
    const brandMainColor = brand.main;
    const successMainColor = success.main;
    const errorMainColor = error.main;
    const warningMainColor = warning.main;

    return {
        brandMainColor,
        successMainColor,
        errorMainColor,
        warningMainColor,
    };
})`
    margin-right: ${MARGIN_SMALL};
    flex-shrink: 0;
    ${props =>
        props.icon === 'info' &&
        `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: ${BORDER_RADIUS_2};
            margin-right: ${MARGIN_SMALL};
            background-color: ${props.brandMainColor};
        `};
    ${props =>
        props.icon === 'success' &&
        `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: ${BORDER_RADIUS_2};
            margin-right: ${MARGIN_SMALL};
            background-color: ${props.successMainColor};
        `};
    ${props =>
        props.icon === 'error' &&
        `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: ${BORDER_RADIUS_2};
            margin-right: ${MARGIN_SMALL};
            background-color: ${props.errorMainColor};
        `};
    ${props =>
        props.icon === 'warning' &&
        `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: ${BORDER_RADIUS_2};
            margin-right: ${MARGIN_SMALL};
            background-color: ${props.warningMainColor};
        `};
`;

export default StyledIconContainer;
