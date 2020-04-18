import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledClockContainer = attachThemeAttrs(styled.div)`
    position: absolute;
    z-index: 3000;
    top: 100%;
    margin-top: 3px
    visibility: hidden;
    height: 24px;
    width: 24px;
    border-radius: 20px;
    box-shadow: 0 0px 2px 0px rgba(186, 191, 192, 0.5);

    ${props =>
        (props.opener.from || props.opener.to) &&
        `
            right: 49%;
            visibility: visible;
        `};
`;

export default StyledClockContainer;
