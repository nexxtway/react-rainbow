import getSlideFrom from '../getSlideFrom';

describe('getSlideFrom', () => {
    it('should return left', () => {
        const values = ['left', null, undefined, {}, '', 0, 31];
        values.forEach(value => {
            expect(getSlideFrom(value, 'left')).toBe('left');
        });
    });
    it('should return right', () => {
        const values = ['right', null, undefined, {}, '', 0, 31];
        values.forEach(value => {
            expect(getSlideFrom(value, 'right')).toBe('right');
        });
    });
});
