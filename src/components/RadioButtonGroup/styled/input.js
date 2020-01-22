import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

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
        color: #706e6b;
        font-weight: 400;
    }

    &[disabled] {
        cursor: default;
    }
`;

export default StyledInput;
