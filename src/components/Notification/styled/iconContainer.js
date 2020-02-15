import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledIconContainer = attachThemeAttrs(styled.div)`
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
            background-color: ${props.palette.brand.main};
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
            background-color: ${props.palette.success.main};
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
            background-color: ${props.palette.error.main};
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
            background-color: ${props.palette.warning.main};
        `};
`;

export default StyledIconContainer;
