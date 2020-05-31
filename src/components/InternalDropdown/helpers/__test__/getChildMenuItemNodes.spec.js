import getChildMenuItemNodes from '../getChildMenuItemNodes';

describe('getChildMenuItemNodes', () => {
    const elements = [
        { element: 'div', innerText: 'Julio' },
        { element: 'div', innerText: 'Pepe' },
    ];
    const ref = {
        querySelectorAll: jest.fn(() => elements),
    };
    it('should call querySelectorAll with a[role="menuitem"]', () => {
        getChildMenuItemNodes(ref);
        expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
    });
    it('should return the elements resolved by querySelectorAll', () => {
        expect(getChildMenuItemNodes(ref)).toEqual(elements);
    });
    it('should return an empty array if anything is passed', () => {
        expect(getChildMenuItemNodes()).toEqual([]);
    });
});
