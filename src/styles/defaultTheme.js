import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_WHITE,
    COLOR_GRAY_2,
} from './colors';
import { darken, getContrastText } from './helpers/color';

export default {
    palette: {
        brand: {
            main: COLOR_BRAND,
            dark: darken(COLOR_BRAND),
        },
        success: COLOR_SUCCESS,
        error: COLOR_ERROR,
        warning: COLOR_WARNING,
        background: {
            primary: COLOR_WHITE,
            secondary: COLOR_GRAY_2,
        },
        getContrastText,
    },
};
