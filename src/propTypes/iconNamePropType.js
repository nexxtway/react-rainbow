import createChainableTypeChecker from './createChainableTypeChecker';
import iconNamePropTypeValidator from './iconNamePropTypeValidator';

export default {
    simple: createChainableTypeChecker(iconNamePropTypeValidator),
    oneOf: iconPrefixes => createChainableTypeChecker(iconNamePropTypeValidator, iconPrefixes),
};
