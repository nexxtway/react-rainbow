import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledClockContainer = attachThemeAttrs(styled.div)`
    position: absolute;
    z-index: 3000;
    top: 100%;
    visibility: hidden;
    margin-top: 4px;

    ${props =>
        props.opener.from &&
        `
            left: 47%;
        `};

    ${props =>
        props.opener.to &&
        `
            right: 47%;
        `};

    ${props =>
        (props.opener.from || props.opener.to) &&
        `
            visibility: visible;
        `};
`;

export default StyledClockContainer;
