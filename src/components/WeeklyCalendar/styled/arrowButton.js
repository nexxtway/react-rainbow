import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_SMALL } from '../../../styles/margins';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledArrowButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
    margin-right: ${MARGIN_SMALL};
    ${props =>
        props.disabled &&
        `
            color: ${props.palette.text.disabled};
        `};

    width: 2rem;
    height: 2rem;
    line-height: 2;

    svg {
        width: 0.7rem !important;
        height: 0.7rem !important;
    }
`;

export default StyledArrowButton;
