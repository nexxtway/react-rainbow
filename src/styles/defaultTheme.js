import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_WHITE,
    COLOR_GRAY_2,
} from './colors';
import { darken, getContrastText, lighten } from './helpers/color';

export const light = {
    background: {
        primary: COLOR_WHITE,
        secondary: '#f9fafc',
        disabled: 'rgba(0, 0, 0, 0.26)',
    },
    divider: COLOR_GRAY_2,
    text: {
        primary: '#061c3f',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(0, 0, 0, 0.14)',
        disabled: 'rgba(0, 0, 0, 0.26)',
    },
};

export const dark = {
    text: {
        primary: COLOR_WHITE,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
        primary: '#303030',
        secondary: '#424242',
        disabled: 'rgba(255, 255, 255, 0.12)',
    },
    action: {
        active: COLOR_WHITE,
        hover: 'rgba(255, 255, 255, 0.1)',
        hoverOpacity: 0.1,
        selected: 'rgba(255, 255, 255, 0.2)',
        disabled: 'rgba(255, 255, 255, 0.3)',
    },
};

export default {
    palette: {
        type: 'light',
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
        getContrastText,
        ...light,
    },
};
