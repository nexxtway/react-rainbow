import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../../styles/borderRadius';

const StyledStatsCard = attachThemeAttrs(styled.div)`
    border: solid 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
    padding: 10px 8px 10px 16px;
    display: flex;
    align-items: center;
    margin: 0 16px 16px 16px;
    border-radius: 12px;

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};
        
    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};
        
    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export default StyledStatsCard;
