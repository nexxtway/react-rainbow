import defaultTheme from '../../styles/defaultTheme';

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

export default function normalizeTheme(theme) {
    return {
        rainbow: {
            palette: {
                ...defaultTheme.palette,
                ...pickColors(
                    ['brand', 'success', 'error', 'warning'],
                    get(theme, 'rainbow.palette'),
                ),
                background: {
                    ...defaultTheme.palette.background,
                    ...pickColors(
                        ['primary', 'secundary'],
                        get(theme, 'rainbow.palette.background'),
                    ),
                },
            },
        },
    };
}
