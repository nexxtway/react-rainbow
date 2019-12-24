import { COLOR_BRAND, COLOR_SUCCESS } from '../../colors';
import { darken, getContrastRatio } from './index';

const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
    },
};

// TODO: this to values can be customizables
const dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
    },
};
// TODO: need to be 3
const contrastThreshold = 3;

export default function getContrastText(background) {
    if (!background) {
        throw new TypeError(`Missing background argument in getContrastText(${background}).`);
    }
    const isDefaultBackground =
        background === COLOR_BRAND ||
        background === darken(COLOR_BRAND) ||
        background === COLOR_SUCCESS ||
        background === darken(COLOR_SUCCESS);

    const contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground
            ? dark.text.primary
            : light.text.primary;

    return contrastText;
}
