import Content from './../content';

describe('<Content/>', () => {
    it('should return the label when there are not children', () => {
        const label = 'Label in Content';
        expect(Content({ label })).toBe(label);
    });
    it('should return the label when children is null', () => {
        const label = 'Label in Content';
        const children = null;
        expect(Content({ label, children })).toBe(label);
    });
    it('should return the label when children is undefined', () => {
        const label = 'Label in Content';
        const children = undefined;
        expect(Content({ label, children })).toBe(label);
    });
    it('should return children when label and children are passed', () => {
        const label = 'Label in Content';
        const children = 'Children in Content';
        expect(Content({ label, children })).toBe(children);
    });
    it('should return children when label is not passed', () => {
        const children = 'Children in Content';
        expect(Content({ children })).toBe(children);
    });
});
