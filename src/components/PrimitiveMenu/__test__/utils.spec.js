import {
    insertChildOrderly,
    findItemByKey,
    findItemIndex,
    getChildMenuItemNodes,
} from './../utils';

describe('<ButtonMenu/> utils', () => {
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
    describe('findItemByKey', () => {
        it('should find the item matched with the key passed', () => {
            const childrenRefs = [
                { innerText: 'Julio' },
                { innerText: 'Luis' },
                { innerText: 'Pepe' },
            ];
            expect(findItemByKey('L', childrenRefs)).toEqual({ innerText: 'Luis' });
        });
        it('should find the item matched with the key passed altought the key is in lower case and the item innerText is in upper case', () => {
            const childrenRefs = [
                { innerText: 'Julio' },
                { innerText: 'Luis' },
                { innerText: 'Pepe' },
            ];
            expect(findItemByKey('l', childrenRefs)).toEqual({ innerText: 'Luis' });
        });
        it('should return undefined if nothing match', () => {
            const childrenRefs = [
                { innerText: 'Julio' },
                { innerText: 'Luis' },
                { innerText: 'Pepe' },
            ];
            expect(findItemByKey('d', childrenRefs)).toBeUndefined();
        });
    });
    describe('findItemIndex', () => {
        it('should find the right index', () => {
            const childrenRefs = ['item1', 'item2', 'item3'];
            expect(findItemIndex(childrenRefs, 'item2')).toBe(1);
        });
        it('should return -1 if the item passed does not match', () => {
            const childrenRefs = ['item1', 'item2', 'item3'];
            expect(findItemIndex(childrenRefs, 'item5')).toBe(-1);
        });
    });
    describe('getChildMenuItemNodes', () => {
        const elements = [
            { element: '[role="menuitem"]', innerText: 'Julio' },
            { element: '[role="menuitem"]', innerText: 'Pepe' },
        ];
        const ref = {
            querySelectorAll: jest.fn(() => elements),
        };
        it('should call querySelectorAll with [role="menuitem"]', () => {
            getChildMenuItemNodes(ref);
            expect(ref.querySelectorAll).toHaveBeenCalledWith('[role="menuitem"]');
        });
        it('should return the elements resolved by querySelectorAll', () => {
            expect(getChildMenuItemNodes(ref)).toEqual(elements);
        });
        it('should return an empty array if anything is passed', () => {
            expect(getChildMenuItemNodes()).toEqual([]);
        });
    });
});
