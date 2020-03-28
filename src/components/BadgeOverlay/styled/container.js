import styled from 'styled-components';
import attchThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attchThemeAttrs(styled.span)`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    flex-shrink: 0;

    ${props =>
        props.overlap === 'circle' &&
        `
            border-radius: 50%;
        `};
`;

export default StyledContainer;
