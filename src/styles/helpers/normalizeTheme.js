import defaultTheme, { light, dark } from '../defaultTheme';
import { darken, lighten } from './color';

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

function getLightOrDark(type) {
    return type === 'dark' ? dark : light;
}

export default function normalizeTheme(theme) {
    return {
        rainbow: {
            palette: {
                ...defaultTheme.palette,
                ...pickColors(['type'], get(theme, 'rainbow.palette')),
                ...normalizeColors(
                    pickColors(
                        ['brand', 'success', 'error', 'warning'],
                        get(theme, 'rainbow.palette'),
                    ),
                ),
                ...getLightOrDark(get(theme, 'rainbow.palette.type')),
            },
        },
    };
}
