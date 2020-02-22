import { COLOR_BRAND, COLOR_SUCCESS } from '../../colors';
import { darken, getContrastRatio, colorToRgba } from './index';

const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
    },
};

const dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
    },
};

const contrastThreshold = 3;

export default function getContrastText(background) {
    if (!background) {
        throw new TypeError(`Missing background argument in getContrastText(${background}).`);
    }
    const isDefaultBackground =
        background === colorToRgba(COLOR_BRAND) ||
        background === colorToRgba(darken(COLOR_BRAND)) ||
        background === colorToRgba(COLOR_SUCCESS) ||
        background === colorToRgba(darken(COLOR_SUCCESS));

    const contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground
            ? dark.text.primary
            : light.text.primary;

    return contrastText;
}
