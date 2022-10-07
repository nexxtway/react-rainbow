import styled from 'styled-components';
import { COLOR_GRAY_3, COLOR_GRAY_TRANSPARENT_3 } from '../../../../styles/colors';
import { darken, lighten } from '../../../../styles/helpers/color';
import ButtonIcon from '../../../ButtonIcon';

const COLOR = darken(COLOR_GRAY_3, 0.2);

const TogglePasswordButton = styled(ButtonIcon)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.4rem;
    font-size: 1em;
    color: ${COLOR};
    background-color: ${COLOR_GRAY_TRANSPARENT_3};
    border-radius: 100px;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    ${props =>
        props.size === 'large' &&
        `
            top: 0.2rem;
            width: 2rem;
            height: 2rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 1.1rem;
            height: 1.1rem;
        `};

    &:hover,
    &:focus {
        color: ${COLOR};
        background-color: ${lighten(COLOR_GRAY_TRANSPARENT_3, 0.4)};
    }
`;

export default TogglePasswordButton;
