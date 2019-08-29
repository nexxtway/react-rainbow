import isScrolPositionlAtMenuBottom from '../isScrolPositionlAtMenuBottom';

describe('isScrolPositionlAtMenuBottom', () => {
    it('should return true when scroll position is at bottom', () => {
        const menuRef1 = {
            scrollHeight: 925,
            scrollTop: 400,
            clientHeight: 225,
        };

        const menuRef2 = {
            scrollHeight: 925,
            scrollTop: 700,
            clientHeight: 225,
        };

        expect(isScrolPositionlAtMenuBottom(menuRef1)).toBe(false);
        expect(isScrolPositionlAtMenuBottom(menuRef2)).toBe(true);
    });
});
