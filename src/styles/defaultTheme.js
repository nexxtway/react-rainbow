import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_WHITE,
    COLOR_DARK_1,
} from './colors';
import { darken, getContrastText, lighten } from './helpers/color';

export default {
    palette: {
        brand: {
            main: COLOR_BRAND,
            dark: darken(COLOR_BRAND),
            light: lighten(COLOR_BRAND),
        },
        success: {
            main: COLOR_SUCCESS,
            dark: darken(COLOR_SUCCESS),
            light: lighten(COLOR_SUCCESS),
        },
        error: {
            main: COLOR_ERROR,
            dark: darken(COLOR_ERROR),
            light: lighten(COLOR_ERROR),
        },
        warning: {
            main: COLOR_WARNING,
        },
        background: {
            main: COLOR_WHITE,
            secondary: darken(COLOR_WHITE, 0.2),
        },
        divider: darken(COLOR_WHITE, 0.12),
        text: {
            main: COLOR_DARK_1,
            secondary: darken(COLOR_DARK_1, 0.3),
            disabled: darken(COLOR_DARK_1, 0.5),
        },
        action: {
            active: darken(COLOR_WHITE, 0.54),
            hover: darken(COLOR_WHITE, 0.1),
            selected: darken(COLOR_WHITE, 0.2),
            disabled: darken(COLOR_WHITE, 0.3),
        },
        getContrastText,
    },
};
