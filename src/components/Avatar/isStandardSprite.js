const STANDARD_REGEX = /^standard:.+/;

export default function isStandardSprite(iconName) {
    return STANDARD_REGEX.test(iconName);
}
