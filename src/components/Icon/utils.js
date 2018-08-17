const UTILITY_REGEX = /^utility:.+/;
const ACTION_REGEX = /^action:.+/;
const CUSTOM_REGEX = /^custom:.+/;
const STANDARD_REGEX = /^standard:.+/;

export function isUtilitySprite(iconName) {
    return UTILITY_REGEX.test(iconName);
}

export function isActionSprite(iconName) {
    return ACTION_REGEX.test(iconName);
}

export function isCustomSprite(iconName) {
    return CUSTOM_REGEX.test(iconName);
}

export function isStandardSprite(iconName) {
    return STANDARD_REGEX.test(iconName);
}

export function normalizeIconName(iconName) {
    return iconName.replace(/_/g, '-').replace(':', '-');
}

export function hasBackgroundColor(iconName) {
    return isActionSprite(iconName)
        || isCustomSprite(iconName)
        || isStandardSprite(iconName);
}
