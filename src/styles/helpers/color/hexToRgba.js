/* eslint-disable no-param-reassign */
export default function hexToRgba(color, alpha) {
    color = color.substr(1);

    const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
    }

    return colors ? `rgba(${colors.map(n => parseInt(n, 16)).join(', ')}, ${alpha})` : '';
}
