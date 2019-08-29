import isScrolPositionlAtMenuBottom from '../isScrolPositionlAtMenuBottom';

describe('isScrolPositionlAtMenuBottom', () => {
    it('should return true when scroll position is at bottom', () => {
        const menuRef = {
            scrollHeight: 925,
            scrollTop: 700,
            clientHeight: 225,
        };

        expect(isScrolPositionlAtMenuBottom(menuRef)).toBe(true);
    });
    it('should return false when scroll position is not bottom', () => {
        const menuRef = {
            scrollHeight: 925,
            scrollTop: 400,
            clientHeight: 225,
        };

        expect(isScrolPositionlAtMenuBottom(menuRef)).toBe(false);
    });
});
