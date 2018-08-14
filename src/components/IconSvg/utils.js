const FORMAT_REGEX = /^[a-z]+:[a-z_0-9]+$/;

export function isIconNameValid(iconName) {
    return FORMAT_REGEX.test(iconName);
}

export function getSpriteName(iconName) {
    return iconName.split(':')[0];
}

export function getIconName(iconName) {
    return iconName.split(':')[1];
}
