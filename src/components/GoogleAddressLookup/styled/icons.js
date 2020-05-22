import styled from 'styled-components';
import '../../../styles/defaultTheme';
import attachThemeAttrs from './../../../styles/helpers/attachThemeAttrs';

export const IconCircleColor = attachThemeAttrs(styled.svg)`
  fill: ${props => props.palette.text.disabled}
`;

export const IconPinColor = attachThemeAttrs(styled.svg)`
    fill: ${props => props.palette.background.main}
`;

export const SearchValueIconColor = attachThemeAttrs(styled.svg)`
    fill: ${props => props.palette.brand.main}
`;
