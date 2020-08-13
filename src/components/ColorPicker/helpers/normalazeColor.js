import { colorToRgba } from '../../../styles/helpers/color';

export default function normalazeColor(color) {
    const rgbaColor = colorToRgba(color);
    return rgbaColor !== '' ? rgbaColor : 'rgba(0, 0, 0, 1)';
}
