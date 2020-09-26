import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

// eslint-disable-next-line import/prefer-default-export
export const HighlightedContainer = attachThemeAttrs(styled.div)`

`;

export const DefaultHitContainer = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.main};
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Lato Black';
`;

export const DefaultTextContainer = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.main};
    font-size: 1rem;
`;
