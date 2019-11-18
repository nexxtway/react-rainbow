import { insertChildOrderly, getChildMenuItemNodes } from '../utils';

describe('<ButtonMenu/> utils', () => {
    describe('insertChildOrderly', () => {
        it('should insert the child in the right order if the item in the nodes is at middle', () => {
            const children = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item4' },
                { ref: 'item5' },
            ];
            const newChildren = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item3' },
                { ref: 'item4' },
                { ref: 'item5' },
            ];
            const nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
            expect(insertChildOrderly(children, { ref: 'item3' }, nodes)).toEqual(newChildren);
        });
        it('should insert the child in the right order if the item in the nodes is at end', () => {
            const children = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item3' }];
            const newChildren = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item3' },
                { ref: 'item4' },
            ];
            const nodes = ['item1', 'item2', 'item3', 'item4'];
            expect(insertChildOrderly(children, { ref: 'item4' }, nodes)).toEqual(newChildren);
        });
    });
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
});
