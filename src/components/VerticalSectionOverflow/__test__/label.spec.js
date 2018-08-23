import Label from './../label';

describe('<VerticalSectionOverflowLabel/>', () => {
    it('should return the expanded label when isExpanded is true', () => {
        expect(Label({
            expandedLabel: 'is expanded',
            collapsedLabel: 'is collapsed',
            isExpanded: true,
        })).toBe('is expanded');
    });
    it('should return the collapsed label when isExpanded is false', () => {
        expect(Label({
            expandedLabel: 'is expanded',
            collapsedLabel: 'is collapsed',
            isExpanded: false,
        })).toBe('is collapsed');
    });
});
