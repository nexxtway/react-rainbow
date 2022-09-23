const ICON_SIZES = {
    small: 14,
    medium: 22,
};

export default function getIconSize(size) {
    return ICON_SIZES[size] || ICON_SIZES.medium;
}
