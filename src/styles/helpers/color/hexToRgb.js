import isHexColor from './isHexColor';

export default function hexToRgb(color) {
    if (isHexColor(color)) {
        const hexColor = color.substr(1);
        const re = new RegExp(`.{1,${hexColor.length / 3}}`, 'g');
        const regColors = hexColor.match(re);

        if (regColors) {
            const colors = regColors.map(n => {
                if (n.length === 1) {
                    return n + n;
                }
                return n;
            });

            return `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})`;
        }
    }
    return '';
}
