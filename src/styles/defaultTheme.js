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
    COLOR_GRAY_4,
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
            highlight: COLOR_GRAY_2,
            secondary: '#f9fafc',
            inverse: '#f9fafc',
            disabled: COLOR_GRAY_1,
        },
        text: {
            main: COLOR_DARK_1,
            title: COLOR_GRAY_4,
            header: COLOR_GRAY_3,
            label: COLOR_GRAY_4,
            inverse: COLOR_WHITE,
            disabled: COLOR_GRAY_2,
            disabled_inverse: COLOR_GRAY_3,
        },
        border: {
            main: COLOR_GRAY_3,
            divider: COLOR_GRAY_2,
            inverse: COLOR_WHITE,
            disabled: COLOR_GRAY_2,
        },
        action: {
            active: COLOR_GRAY_1,
            hover: COLOR_GRAY_1,
            active_inverse: COLOR_GRAY_3,
        },
        getContrastText,
        isDark: false,
    },
    shadows: {
        brand: `0 0 2px ${COLOR_BRAND}`,
        success: `0 0 2px ${COLOR_SUCCESS}`,
        error: `0 0 2px ${COLOR_ERROR}`,
        shadow_1: `0 0 2px 0 ${COLOR_GRAY_3}`,
        shadow_2: `0 2px 4px 0 ${COLOR_GRAY_2}`,
        shadow_3: `0 0 1px 0 ${COLOR_GRAY_3}`,
        shadow_4: `0 1px 2px 0 ${COLOR_GRAY_2}`,
        shadow_5: `0 0 3px ${COLOR_GRAY_1}`,
        shadow_6: `0 2px 12px 0 ${COLOR_GRAY_2}`,
        shadow_7: `0 0 0 4px ${COLOR_GRAY_2}`,
    },
};
