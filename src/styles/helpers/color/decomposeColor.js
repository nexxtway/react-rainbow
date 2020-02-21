import { hexToRgba } from './index';

export default function decomposeColor(color) {
    // Idempotent
    if (color.type) {
        return color;
    }

    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgba(color));
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
