import { colorToRgba } from './color';

function normalizePaletteColors(palette) {
    const normalizedPalette = {};
    Object.keys(palette).forEach(key => {
        const value = palette[key];
        if (typeof value === 'string') {
            normalizedPalette[key] = colorToRgba(value);
        } else if (typeof value === 'object') {
            normalizedPalette[key] = normalizePaletteColors(palette[key]);
        } else {
            normalizedPalette[key] = palette[key];
        }
    });
    return normalizedPalette;
}

export default function normalizeThemeColors(theme) {
    return {
        ...theme,
        palette: {
            ...normalizePaletteColors(theme.palette),
        },
    };
}
