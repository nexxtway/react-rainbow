import styled from 'styled-components';
import { MARGIN_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_BRAND, COLOR_SUCCESS, COLOR_ERROR, COLOR_YELLOW_1 } from '../../../styles/colors';

const StyledIconContainer = styled.div`
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
            background-color: ${COLOR_BRAND};
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
            background-color: ${COLOR_SUCCESS};
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
            background-color: ${COLOR_ERROR};
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
            background-color: ${COLOR_YELLOW_1};
        `};
`;

export default StyledIconContainer;
