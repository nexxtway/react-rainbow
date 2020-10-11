import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        border-bottom: solid 1px ${props => props.palette.border.divider};
        background-color: ${props => props.palette.background.main} !important;
    }

    ${props =>
        props.variant === 'line' &&
        `
            border-bottom: solid 1px ${props.palette.border.divider};
        `};
`;

export default StyledContainer;
