/* eslint-disable no-param-reassign */
export default function hexToRgb(color) {
    if (color.charAt(0) !== '#') {
        return '';
    }

    color = color.substr(1);

    if (color.length !== 3 && color.length !== 6) {
        return '';
    }

    const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
    }

    return colors ? `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})` : '';
}
