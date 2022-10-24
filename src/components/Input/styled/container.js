import styled from 'styled-components';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export default Container;
