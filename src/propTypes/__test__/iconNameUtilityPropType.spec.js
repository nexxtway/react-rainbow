import iconNameUtilityPropType from '../iconNameUtilityPropType';

const propName = 'iconName';
const componentName = 'TestComponent';
const error = new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is 'utility'.`);

describe('iconNameUtilityPropType function', () => {
    it('should return an error if the icon name does not contain :', () => {
        const props = { iconName: 'utility' };
        const result = iconNameUtilityPropType(props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return an error if the icon name sprite is not utility', () => {
        const props = { iconName: 'action:back' };
        const result = iconNameUtilityPropType(props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return null if the icon name sprite is utility', () => {
        const props = { iconName: 'utility:world' };
        const result = iconNameUtilityPropType(props, propName, componentName);
        expect(result).toBeNull();
    });
});
