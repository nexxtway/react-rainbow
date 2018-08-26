export default function createChainableTypeChecker(validate, iconPrefixes) {
    function checkType(isRequired, props, propName, componentName) {
        const { iconName } = props;
        if (iconName == null) {
            if (isRequired) {
                return new Error(
                    `Required \`${propName}\` was not specified in ` +
                    `\`${componentName}\`.`,
                );
            }
            return null;
        }
        return validate(iconPrefixes, props, propName, componentName);
    }

    const chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
}
