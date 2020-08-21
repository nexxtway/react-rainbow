import { colorToRgba } from '../../../styles/helpers/color';

export default function normalizeColor(color) {
    const rgbaColor = colorToRgba(color);
    return rgbaColor !== '' ? rgbaColor : 'rgba(0, 0, 0, 1)';
}
