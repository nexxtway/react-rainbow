import iconNamePropType from '../iconNamePropType';

const propName = 'iconName';
const componentName = 'TestComponent';
const error = new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a string in the format of {sprite}:{icon_name}, where sprite is one of ['action', 'custom', 'doctype', 'standard', 'utility'].`);

describe('iconNamePropType function', () => {
    it('should return an error if the icon name does`nt contain :', () => {
        const props = { iconName: 'utility' };
        const result = iconNamePropType(props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return an error if the icon name category is not valid', () => {
        const props = { iconName: 'fail:world' };
        const result = iconNamePropType(props, propName, componentName);
        expect(result).toEqual(error);
    });
    it('should return null if the icon name is valid', () => {
        const props = { iconName: 'utility:world' };
        const result = iconNamePropType(props, propName, componentName);
        expect(result).toBeNull();
    });
});
