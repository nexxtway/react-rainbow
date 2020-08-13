import isHexColor from '../isHexColor';

describe('isHexColor', () => {
    it('should recognize 6-digit and 3-digit hex colors', () => {
        const colors = ['#ffffff', '#FF0000', '#f0c34a', '#fff', '#F00', '#f89'];
        colors.forEach(color => {
            expect(isHexColor(color)).toBeTrue();
        });
    });

    it('should recognize non hex colors', () => {
        const colors = ['a', 'FFFFFF', 232323];
        colors.forEach(color => {
            expect(isHexColor(color)).toBeFalse();
        });
    });
});
