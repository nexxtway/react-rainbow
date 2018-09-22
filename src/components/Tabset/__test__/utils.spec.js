import {
    insertChildOrderly,
    getChildTabNodes,
} from './../utils';

describe('<Tabset/> utils', () => {
    describe('insertChildOrderly', () => {
        it('should insert the child in the right order if the item in the nodes is at middle', () => {
            const childrenRefs = ['item1', 'item2', 'item4', 'item5'];
            const nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
            expect(insertChildOrderly(childrenRefs, 'item3', nodes)).toEqual(nodes);
        });
        it('should insert the child in the right order if the item in the nodes is at end', () => {
            const childrenRefs = ['item1', 'item2', 'item3'];
            const nodes = ['item1', 'item2', 'item3', 'item4'];
            expect(insertChildOrderly(childrenRefs, 'item4', nodes)).toEqual(nodes);
        });
    });
    describe('getChildTabNodes', () => {
        const elements = [
            { element: 'a', innerText: 'Julio' },
            { element: 'a', innerText: 'Pepe' },
        ];
        const ref = {
            querySelectorAll: jest.fn(() => elements),
        };
        it('should call querySelectorAll with a[role="tab"]', () => {
            getChildTabNodes(ref);
            expect(ref.querySelectorAll).toHaveBeenCalledWith('a[role="tab"]');
        });
        it('should return the elements resolved by querySelectorAll', () => {
            expect(getChildTabNodes(ref)).toEqual(elements);
        });
        it('should return an empty array if anything is passed', () => {
            expect(getChildTabNodes()).toEqual([]);
        });
    });
});
