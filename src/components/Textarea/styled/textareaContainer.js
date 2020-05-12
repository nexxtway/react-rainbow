import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledTextareaContainer = attachThemeAttrs(styled.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${BORDER_RADIUS_1};
    border: none;
    ${props =>
        props.footer &&
        `
            border: solid 1px ${props.palette.border.main};

            :focus-within {
                background-color: ${props.palette.background.main};
                border: solid 2px ${props.palette.brand.main};
                box-shadow: ${props.shadows.brand};
            }
        `};
`;

export default StyledTextareaContainer;
