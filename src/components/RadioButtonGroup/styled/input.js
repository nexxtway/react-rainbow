import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInput = attachThemeAttrs(styled.input)`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;
    box-sizing: border-box;
    padding: 0;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :-ms-input-placeholder {
        color: ${props => props.palette.text.label};
        font-weight: 400;
    }

    &[disabled] {
        cursor: default;
    }
`;

export default StyledInput;
