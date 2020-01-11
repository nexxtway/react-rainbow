import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
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
            secondary: '#f9fafc',
            disabled: COLOR_GRAY_1,
        },
        divider: COLOR_GRAY_2,
        text: {
            main: COLOR_DARK_1,
            secondary: COLOR_GRAY_3,
            disabled: COLOR_GRAY_2,
        },
        action: {
            hover: COLOR_GRAY_2,
        },
        getContrastText,
    },
};
