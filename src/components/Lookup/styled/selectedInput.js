import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import Input from '../../Input/styled/input';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';

const StyledSelectedInput = attachThemeAttrs(styled(Input))`
caret-color: transparent;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    padding-right: 2.35rem;
    text-overflow: ellipsis;
    box-shadow: inset 0 0 0 3px ${props => props.palette.background.main},
                inset 0 0 0 4px ${props => props.palette.border.divider};

    :focus,
    :active {
        box-shadow: inset 0 0 0 2px ${props => props.palette.background.main},
                    inset 0 0 0 3px ${props => props.palette.border.divider};
                    ${props => props.shadows.brand};
        padding-right: 2.35rem;
        text-overflow: ellipsis;
    }

    &[disabled] {
        box-shadow: none;

        &:focus,
        &:active {
            padding-right: 1rem;
        }
    }

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};
    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export default StyledSelectedInput;
