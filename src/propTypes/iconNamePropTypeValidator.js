const allowedPrefixes = ['action', 'custom', 'doctype', 'standard', 'utility'];

export default function iconNamePropTypeValidator(iconPrefixes, props, propName, componentName) {
    const { iconName } = props;
    const iconPrefixesToTry = iconPrefixes || allowedPrefixes;
    if (iconName !== undefined && iconName !== null && iconName !== '') {
        const [prefix] = iconName.split(':');
        if (prefix === iconName || iconPrefixesToTry.find(p => p === prefix) === undefined) {
            return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is one of [ ${iconPrefixesToTry.toString()} ].`);
        }
    }
    return null;
}
