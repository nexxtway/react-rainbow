import { COLOR_BRAND, COLOR_SUCCESS, COLOR_ERROR, COLOR_WARNING, COLOR_WHITE } from './colors';
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
        warning: COLOR_WARNING,
        background: {
            primary: COLOR_WHITE,
            secondary: '#f9fafc',
        },
        getContrastText,
    },
};
