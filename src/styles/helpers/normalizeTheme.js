import defaultTheme from '../defaultTheme';
import { darken, lighten, isDark, getContrastText, isValidColor } from './color';

function pickColors(colors, obj = {}) {
    return colors.reduce((seed, color) => {
        if (typeof obj[color] === 'string') {
            // eslint-disable-next-line no-param-reassign
            seed[color] = obj[color];
        }
        return seed;
    }, {});
}

function get(obj, path) {
    return path.split('.').reduce((acc, item) => {
        if (typeof acc === 'object' && acc !== null) {
            return acc[item];
        }
        return undefined;
    }, obj);
}

function normalizeColors(colors) {
    return Object.keys(colors).reduce((seed, key) => {
        // eslint-disable-next-line no-param-reassign
        seed[key] = {
            main: colors[key],
            dark: darken(colors[key]),
            light: lighten(colors[key]),
        };
        return seed;
    }, {});
}

function normalizeBackground(background) {
    if (background && isValidColor(background)) {
        const dark = isDark(background);
        const mainText = getContrastText(background);
        const theme = {
            background: {
                main: background,
                secondary: dark ? lighten(background, 0.2) : darken(background, 0.2),
                disabled: dark ? lighten(background, 0.1) : darken(background, 0.1),
            },
            divider: dark ? lighten(background, 0.3) : darken(background, 0.12),
            text: {
                main: mainText,
                secondary: dark ? darken(mainText, 0.3) : lighten(mainText, 0.3),
                disabled: dark ? darken(mainText, 0.5) : lighten(mainText, 0.5),
            },
            action: {
                hover: dark ? lighten(background, 0.1) : darken(background, 0.1),
            },
        };
        return theme;
    }
    return {};
}

export default function normalizeTheme(theme) {
    return {
        rainbow: {
            palette: {
                ...defaultTheme.palette,
                ...normalizeColors(
                    pickColors(
                        ['brand', 'success', 'error', 'warning'],
                        get(theme, 'rainbow.palette'),
                    ),
                ),
                ...normalizeBackground(
                    pickColors(['mainBackground'], get(theme, 'rainbow.palette')).mainBackground,
                ),
            },
        },
    };
}
