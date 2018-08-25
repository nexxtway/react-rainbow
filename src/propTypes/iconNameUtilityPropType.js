function iconNameUtilityPropTypeValidator(isRequired, props, propName, componentName) {
    const { iconName } = props;
    if (iconName !== undefined && iconName !== null && iconName !== '') {
        const [prefix] = iconName.split(':');
        if (prefix === iconName || prefix !== 'utility') {
            return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is 'utility'.`);
        }
    }
    return null;
}

const iconNameUtilityPropType = iconNameUtilityPropTypeValidator.bind(null, false);
iconNameUtilityPropType.isRequired = iconNameUtilityPropTypeValidator.bind(null, true);

export default iconNameUtilityPropType;
