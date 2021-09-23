import styled from 'styled-components';
import { COLOR_GRAY_3, COLOR_GRAY_TRANSPARENT_3 } from '../../../../styles/colors';
import { darken, lighten } from '../../../../styles/helpers/color';
import Button from '../../../Button';

const COLOR = darken(COLOR_GRAY_3, 0.2);

const TogglePasswordButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    width: 4em;
    height: 1.5rem;
    margin: 0.5rem;
    font-size: 1em;
    color: ${COLOR};
    background-color: ${COLOR_GRAY_TRANSPARENT_3};
    border-radius: 100px;
    border: none;

    &:hover,
    &:focus {
        color: ${COLOR};
        background-color: ${lighten(COLOR_GRAY_TRANSPARENT_3, 0.4)};
    }
`;

export default TogglePasswordButton;
