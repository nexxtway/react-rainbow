/* eslint-disable no-param-reassign */
import isOnePointZero from './isOnePointZero';
import isPercentage from './isPercentage';

export default function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }

    const processPercent = isPercentage(n);
    n = Math.min(max, Math.max(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}
