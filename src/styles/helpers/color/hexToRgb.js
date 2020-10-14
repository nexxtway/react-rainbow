import isHexColor from './isHexColor';

export default function hexToRgb(color) {
    if (isHexColor(color)) {
        const hexColor = color.substr(1);
        const regex = new RegExp(`.{1,${hexColor.length / 3}}`, 'g');
        const regColors = hexColor.match(regex);

        if (regColors) {
            const colors = regColors.map(value => {
                if (value.length === 1) {
                    return value + value;
                }
                return value;
            });

            return `rgb(${colors.map(value => parseInt(value, 16)).join(', ')})`;
        }
    }
    return '';
}
