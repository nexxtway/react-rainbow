import getChildNodes from '../getChildNodes';

describe('getChildNodes', () => {
    const elements = [
        { element: 'div', innerText: 'Julio' },
        { element: 'div', innerText: 'Pepe' },
    ];
    const ref = {
        querySelectorAll: jest.fn(() => elements),
    };
    it('should call querySelectorAll with a[role="menuitem"]', () => {
        getChildNodes(ref);
        expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
    });
    it('should return the elements resolved by querySelectorAll', () => {
        expect(getChildNodes(ref)).toEqual(elements);
    });
    it('should return an empty array if anything is passed', () => {
        expect(getChildNodes()).toEqual([]);
    });
});
