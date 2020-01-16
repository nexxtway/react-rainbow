import getBrightness from './getBrightness';

export default function isDark(color) {
    return getBrightness(color) < 128;
}
