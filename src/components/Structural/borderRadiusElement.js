import styled from 'styled-components';
import {
    BORDER_RADIUS_1,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../styles/borderRadius';

const BorderRadiusElement = styled.div`
    border-radius: ${BORDER_RADIUS_1};
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

export default BorderRadiusElement;
