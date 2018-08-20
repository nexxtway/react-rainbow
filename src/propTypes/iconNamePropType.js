const allowedPrefixes = ['action', 'custom', 'doctype', 'standard', 'utility'];
export default function iconNamePropType(props, propName, componentName) {
    const { iconName } = props;
    if (iconName !== undefined && iconName !== null && iconName !== '') {
        const [prefix] = iconName.split(':');
        if (prefix === iconName || allowedPrefixes.find(p => p === prefix) === undefined) {
            return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is one of ['action', 'custom', 'doctype', 'standard', 'utility'].`);
        }
    }
    return null;
}
