import defaultTheme from '../defaultTheme';
import { darken } from './color';

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
        };
        return seed;
    }, {});
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
                background: {
                    ...defaultTheme.palette.background,
                    ...pickColors(
                        ['primary', 'secondary'],
                        get(theme, 'rainbow.palette.background'),
                    ),
                },
            },
        },
    };
}
