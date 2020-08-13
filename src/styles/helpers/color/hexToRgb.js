import isHexColor from './isHexColor';

export default function hexToRgba(color, alpha = 1) {
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

            return `rgba(${colors.map(n => parseInt(n, 16)).join(', ')}, ${alpha})`;
        }
    }
    return '';
}
