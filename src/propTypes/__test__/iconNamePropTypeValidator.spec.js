import iconNamePropTypeValidator from '../iconNamePropTypeValidator';

const propName = 'iconName';
const componentName = 'TestComponent';
const error = new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is one of [ action,custom,doctype,standard,utility ].`);
const customPrefixesError = new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is one of [ utility,action,standard ].`);

describe('iconNamePropTypeValidator function', () => {
    it('should return an error if the icon name does`nt contain :', () => {
        const props = { iconName: 'utility' };
        const result = iconNamePropTypeValidator(undefined, props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return an error if the icon name category is not valid', () => {
        const props = { iconName: 'fail:world' };
        const result = iconNamePropTypeValidator(undefined, props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return an error if the icon name category is not valid when icons categories are specified', () => {
        const props = { iconName: 'fail:world' };
        const result = iconNamePropTypeValidator(['utility', 'action', 'standard'], props, propName, componentName);
        expect(result).toEqual(customPrefixesError);
    });
    it('should return null if the icon name is valid', () => {
        const props = { iconName: 'utility:world' };
        const result = iconNamePropTypeValidator(undefined, props, propName, componentName);
        expect(result).toBeNull();
    });
    it('should return null if the icon name is valid when icons categories are specified', () => {
        const props = { iconName: 'utility:world' };
        const result = iconNamePropTypeValidator(['utility', 'action', 'standard'], props, propName, componentName);
        expect(result).toBeNull();
    });
});
