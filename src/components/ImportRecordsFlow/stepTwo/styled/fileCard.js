import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../../styles/borderRadius';

const StyledFileCard = attachThemeAttrs(styled.div)`
    border: solid 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
    padding: 20px 8px 20px 16px;
    display: flex;
    margin: 0 16px 32px 16px;
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

export default StyledFileCard;
