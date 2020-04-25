import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledArrowButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
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
