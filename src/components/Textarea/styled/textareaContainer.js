import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledTextareaContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    border-radius: ${BORDER_RADIUS_1};
    transition: all 0.1s linear, padding 0s, border 0s;
    background-color: ${props => props.palette.background.main};
    border: solid 1px ${props => props.palette.border.main};

    :focus-within {
        background-color: ${props => props.palette.background.main};
        border: solid 2px ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }

    ${props =>
        props.error &&
        `
            border: solid 2px ${props.palette.error.main};
            background-clip: padding-box;

            :focus-within {
                box-shadow: ${props.shadows.error};
                border: solid 2px ${props.palette.error.main};
            }
        `};

    ${props =>
        props.disabled &&
        `
            background-color: ${props.palette.background.disabled};
            border: solid 1px ${props.palette.border.disabled};
            color: ${props.palette.text.disabled};

            :focus-within {
                box-shadow: none;
            }
        `};

    ${props =>
        props.readOnly &&
        `
            border: none;
            border-radius: 0;
            background-color: transparent;

            :focus-within {
                box-shadow: none;
                border: none;
            }
        `};
`;

export default StyledTextareaContainer;
