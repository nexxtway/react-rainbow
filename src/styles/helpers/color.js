import { COLOR_BRAND, COLOR_SUCCESS } from '../colors';

/* eslint-disable no-param-reassign */
export function hexToRgb(color) {
    color = color.substr(1);

    const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
    }

    return colors ? `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})` : '';
}

export function decomposeColor(color) {
    // Idempotent
    if (color.type) {
        return color;
    }

    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(
            [
                `Unsupported \`${color}\` color.`,
                'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
            ].join('\n'),
        );
    }

    let values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(value => parseFloat(value));

    return { type, values };
}

function clamp(value, min = 0, max = 1) {
    if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
            // eslint-disable-next-line no-console
            console.error(`The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }

    return Math.min(Math.max(min, value), max);
}

export function recomposeColor(color) {
    const { type } = color;
    let { values } = color;

    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    }

    return `${type}(${values.join(', ')})`;
}

export function darken(color, coefficient = 0.2) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] *= 1 - coefficient;
        }
    }

    return recomposeColor(color);
}

export function lighten(color, coefficient = 0.8) {
    color = decomposeColor(color);

    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (255 - color.values[i]) * coefficient;
        }
    }

    return recomposeColor(color);
}

function hslToRgb(color) {
    color = decomposeColor(color);
    const { values } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
    }

    return recomposeColor({ type, values: rgb });
}

export function getLuminance(color) {
    color = decomposeColor(color);

    let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

export function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

export const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
    },
};

// TODO: this to values can be customizables
const dark = {
    text: {
        primary: '#fff',
    },
};
// TODO: need to be 3
const contrastThreshold = 3;

export function getContrastText(background) {
    if (!background) {
        throw new TypeError(`Missing background argument in getContrastText(${background}).`);
    }
    const isDefaultBackground =
        background === COLOR_BRAND ||
        background === COLOR_SUCCESS ||
        background === darken(COLOR_SUCCESS);

    const contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground
            ? dark.text.primary
            : light.text.primary;

    return contrastText;
}
