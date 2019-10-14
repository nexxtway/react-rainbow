import styled from 'styled-components';
import { COLOR_BRAND_LIGHT, COLOR_SUCCESS_LIGHT } from '../../../styles/colors';

const StyledContainer = styled.div`
    width: 100%;
    border: 0;
    position: relative;
    display: block;
    background: ${COLOR_BRAND_LIGHT};
    height: 0.5rem;
    border-radius: 1rem;
    ${props => props.size === 'x-small' && 'height: 0.125rem;'}
    ${props => props.size === 'small' && 'height: 0.25rem;'}
    ${props => props.size === 'medium' && 'height: 0.625rem;'}
    ${props => props.size === 'large' && 'height: 1rem;'}
    ${props =>
        props.variant === 'success' &&
        `
            background: ${COLOR_SUCCESS_LIGHT};
        `};
`;

export default StyledContainer;
