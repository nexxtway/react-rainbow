import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        &::before {
            content: "";
            height: 1px;
            width: 100%;
            left: 0;
            bottom: 0px;
            position: absolute;
            background-color: ${props => props.palette.border.divider};
        }
    }

    ${props =>
        props.variant === 'line' &&
        `
            &::before {
                content: "";
                height: 1px;
                width: 100%;
                left: 0;
                bottom: 0px;
                position: absolute;
                background-color: ${props.palette.border.divider};
            }
        `};
`;

export default StyledContainer;
