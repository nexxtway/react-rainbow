export default function clamp(value, min = 0, max = 1) {
    if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
            // eslint-disable-next-line no-console
            console.error(`The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }

    return Math.min(Math.max(min, value), max);
}
