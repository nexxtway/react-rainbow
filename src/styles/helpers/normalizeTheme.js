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

function getLightOrDark(type, property) {
    if (type) {
        if (type === 'light' || type === 'dark') {
            const typeObject = type === 'light' ? light : dark;
            if (property) {
                if (typeObject[property]) {
                    return typeObject[property];
                }
            }
        }
    }
    return undefined;
}

export default function normalizeTheme(theme) {
    return {
        rainbow: {
            palette: {
                ...defaultTheme.palette,
                ...pickColors(['type'], get(theme, 'rainbow.palette')),
                ...pickColors(['divider'], get(theme, 'rainbow.palette')),
                ...normalizeColors(
                    pickColors(
                        ['brand', 'success', 'error', 'warning'],
                        get(theme, 'rainbow.palette'),
                    ),
                ),
                background: {
                    ...defaultTheme.palette.background,
                    ...pickColors(
                        ['primary', 'secondary', 'disabled'],
                        getLightOrDark(get(theme, 'rainbow.palette.type'), 'background'),
                    ),
                },
                text: {
                    ...defaultTheme.palette.text,
                    ...pickColors(
                        ['primary', 'secondary', 'disabled', 'hint'],
                        getLightOrDark(get(theme, 'rainbow.palette.type'), 'text'),
                    ),
                },
                action: {
                    ...defaultTheme.palette.action,
                    ...pickColors(
                        ['active', 'hover', 'hoverOpacity', 'selected', 'disabled'],
                        getLightOrDark(get(theme, 'rainbow.palette.type'), 'action'),
                    ),
                },
            },
        },
    };
}
