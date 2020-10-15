/* eslint-disable no-param-reassign */
export default function hexToRgba(color, alpha = 1) {
    if (color.charAt(0) !== '#') {
        return '';
    }

    color = color.substr(1);

    if (color.length !== 3 && color.length !== 6) {
        return '';
    }

    const regex = new RegExp(`.{1,${color.length / 3}}`, 'g');
    let colors = color.match(regex);

    if (colors && colors[0].length === 1) {
        colors = colors.map(value => value + value);
    }

    return colors ? `rgba(${colors.map(value => parseInt(value, 16)).join(', ')}, ${alpha})` : '';
}
