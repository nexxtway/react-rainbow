import styled from 'styled-components';
import Label from '../../Input/label/labelText';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLabel = attachThemeAttrs(styled(Label))`
    ${props =>
        props.hideLabel &&
        `
            position: absolute !important;
            margin: -1px !important;
            border: 0 !important;
            padding: 0 !important;
            width: 1px !important;
            height: 1px !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            text-transform: none !important;
            white-space: nowrap !important;
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${props.palette.isDark ? '#576574' : 'rgb(178,178,178)'}
        `};
`;

export default StyledLabel;
