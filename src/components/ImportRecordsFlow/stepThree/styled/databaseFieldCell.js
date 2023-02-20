import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../../styles/borderRadius';

const DatabaseFieldContent = attachThemeAttrs(styled.div)`
    background: ${props => props.palette.brand.light};
    color: ${props => props.palette.text.main};
    margin: 8px 20px 8px 0;
    border-radius: 8px;
    padding-left: 12px;
    line-height: 30px;
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

export default DatabaseFieldContent;
