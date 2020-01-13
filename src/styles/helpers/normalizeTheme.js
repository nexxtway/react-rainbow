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

function resolveCustomBackground(background) {
    if (background && isValidColor(background)) {
        const dark = isDark(background);
        const mainText = getContrastText(background);
        const theme = {
            background: {
                main: background,
                secondary: dark ? lighten(background, 0.04) : darken(background, 0.04),
                disabled: dark ? lighten(background, 0.08) : darken(background, 0.08),
            },
            text: {
                main: mainText,
                title: dark ? darken(mainText, 0.5) : lighten(mainText, 0.5),
                header: dark ? darken(mainText, 0.7) : lighten(mainText, 0.7),
                label: dark ? darken(mainText, 0.5) : lighten(mainText, 0.5),
                disabled: dark ? darken(mainText, 0.6) : lighten(mainText, 0.6),
            },
            border: {
                main: dark ? lighten(background, 0.3) : darken(background, 0.3),
                divider: dark ? lighten(background, 0.1) : darken(background, 0.1),
                disabled: dark ? lighten(background, 0.1) : darken(background, 0.1),
            },
            action: {
                active: dark ? lighten(background, 0.08) : darken(background, 0.08),
                hover: dark ? lighten(background, 0.08) : darken(background, 0.08),
            },
        };
        return theme;
    }
    return {};
}

function resolveCustomSahdows(colors, background) {
    let shadows = {};
    if (colors.brand) {
        shadows.brand = `0 0 2px ${colors.brand.main}`;
    }
    if (colors.success) {
        shadows.success = `0 0 2px ${colors.success.main}`;
    }
    if (colors.error) {
        shadows.error = `0 0 2px ${colors.error.main}`;
    }
    if (background && isValidColor(background)) {
        const gray1 = darken(background, 0.1);
        const gray2 = darken(background, 0.3);
        const gray3 = darken(background, 0.5);
        shadows = {
            ...shadows,
            shadow_1: `0 0 2px 0 ${gray3}`,
            shadow_2: `0 2px 4px 0 ${gray2}`,
            shadow_3: `0 0 1px 0 ${gray3}`,
            shadow_4: `0 1px 2px 0 ${gray2}`,
            shadow_5: `0 0 3px ${gray1}`,
            shadow_6: `0 2px 12px 0 ${gray2}`,
        };
    }
    return shadows;
}

export default function normalizeTheme(theme) {
    const colors = normalizeColors(
        pickColors(['brand', 'success', 'error', 'warning'], get(theme, 'rainbow.palette')),
    );
    const mainBackground = get(theme, 'rainbow.palette.mainBackground');
    return {
        rainbow: {
            palette: {
                ...defaultTheme.palette,
                ...colors,
                ...resolveCustomBackground(mainBackground),
            },
            shadows: {
                ...defaultTheme.shadows,
                ...resolveCustomSahdows(colors, mainBackground),
            },
        },
    };
}
