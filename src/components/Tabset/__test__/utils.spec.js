import {
    insertChildOrderly,
    getChildTabNodes,
    getTabIndexFromName,
    getChildrenTotalWidth,
    getChildrenTotalWidthUpToClickedTab,
    isNotSameChildren,
    getUpdatedTabsetChildren,
    getLeftButtonDisabledState,
    getRightButtonDisabledState,
} from './../utils';

describe('<Tabset/> utils', () => {
    describe('insertChildOrderly', () => {
        it('should insert the child in the right order if the item in the nodes is at middle', () => {
            const childrenRefs = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item4' },
                { ref: 'item5' },
            ];
            const nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
            const expectedNodes = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item3' },
                { ref: 'item4' },
                { ref: 'item5' },
            ];
            expect(insertChildOrderly(childrenRefs, { ref: 'item3' }, nodes)).toEqual(
                expectedNodes,
            );
        });
        it('should insert the child in the right order if the item in the nodes is at end', () => {
            const childrenRefs = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item3' }];
            const nodes = ['item1', 'item2', 'item3', 'item4'];
            const expectedNodes = [
                { ref: 'item1' },
                { ref: 'item2' },
                { ref: 'item3' },
                { ref: 'item4' },
            ];
            expect(insertChildOrderly(childrenRefs, { ref: 'item4' }, nodes)).toEqual(
                expectedNodes,
            );
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
        it('should call querySelectorAll with [role="tab"]', () => {
            getChildTabNodes(ref);
            expect(ref.querySelectorAll).toHaveBeenCalledWith('[role="tab"]');
        });
        it('should return the elements resolved by querySelectorAll', () => {
            expect(getChildTabNodes(ref)).toEqual(elements);
        });
        it('should return an empty array if anything is passed', () => {
            expect(getChildTabNodes()).toEqual([]);
        });
    });
    describe('getTabIndexFromName', () => {
        it('should return the right index', () => {
            const tabChildren = [
                { name: 'tab-1' },
                { name: 'tab-2' },
                { name: 'tab-3' },
                { name: 'tab-4' },
                { name: 'tab-5' },
            ];
            const tabNames = ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5'];

            tabNames.forEach((activeTabName, index) => {
                expect(getTabIndexFromName(tabChildren, activeTabName)).toBe(index);
            });
        });
    });
    describe('getChildrenTotalWidth', () => {
        it('should return 0 when any children in tabset has width', () => {
            const tabsetChildren = [
                { name: 'pizza', ref: { offsetWidth: 0 } },
                { name: 'onion', ref: { offsetWidth: 0 } },
                { name: 'tomato', ref: { offsetWidth: 0 } },
            ];
            expect(getChildrenTotalWidth(tabsetChildren)).toBe(0);
        });
        it('should return 0 when tasbset has any children', () => {
            const tabsetChildren = [];
            expect(getChildrenTotalWidth(tabsetChildren)).toBe(0);
        });
        it('should return the right total children width in tabset', () => {
            const tabsetChildren = [
                { name: 'pizza', ref: { offsetWidth: 1 } },
                { name: 'onion', ref: { offsetWidth: 2 } },
                { name: 'tomato', ref: { offsetWidth: 3 } },
            ];
            expect(getChildrenTotalWidth(tabsetChildren)).toBe(6);
        });
    });
    describe('getChildrenTotalWidthUpToClickedTab', () => {
        it('should return the right total children width in tabset when click the second tab', () => {
            const tabIndex = 1;
            const tabsetChildren = [
                { name: 'pizza', ref: { offsetWidth: 1 } },
                { name: 'onion', ref: { offsetWidth: 2 } },
                { name: 'tomato', ref: { offsetWidth: 3 } },
            ];
            expect(getChildrenTotalWidthUpToClickedTab(tabsetChildren, tabIndex)).toBe(1);
        });
        it('should return 0 when click the first tab', () => {
            const tabIndex = 0;
            const tabsetChildren = [
                { name: 'pizza', ref: { offsetWidth: 1 } },
                { name: 'onion', ref: { offsetWidth: 2 } },
                { name: 'tomato', ref: { offsetWidth: 3 } },
            ];
            expect(getChildrenTotalWidthUpToClickedTab(tabsetChildren, tabIndex)).toBe(0);
        });
    });
    describe('isNotSameChildren', () => {
        it('should return true when a children in the tabset was changed in the same position', () => {
            const tabsetChildren = [
                { props: { name: 'pizza' } },
                { props: { name: 'onion' } },
                { props: { name: 'tomato' } },
            ];
            const prevTabsetChildren = [
                { props: { name: 'pizza' } },
                { props: { name: 'onion' } },
                { props: { name: 'mushroom' } },
            ];
            expect(isNotSameChildren(tabsetChildren, prevTabsetChildren)).toBe(true);
        });
        it('should return false when any children in tabset was changed in the same position', () => {
            const tabsetChildren = [
                { props: { name: 'tomato' } },
                { props: { name: 'pizza' } },
                { props: { name: 'apple' } },
            ];
            const prevTabsetChildren = [
                { props: { name: 'tomato' } },
                { props: { name: 'pizza' } },
                { props: { name: 'apple' } },
            ];
            expect(isNotSameChildren(tabsetChildren, prevTabsetChildren)).toBe(false);
        });
    });
    describe('getUpdatedTabsetChildren', () => {
        it('should return an updated tabset with the changed tab when a name to update exist in the tabset children', () => {
            const tab = { name: 'mushroom', ref: {} };
            const nameToUpdate = 'tomato';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const newTabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'mushroom', ref: {} },
            ];
            expect(getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate)).toEqual(
                newTabsetChildren,
            );
        });
        it('should return the same tabset when a name to update do not exist in the tabset children', () => {
            const tab = { name: 'mushroom', ref: {} };
            const nameToUpdate = 'mushroom';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            expect(getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate)).toEqual(
                tabsetChildren,
            );
        });
    });
    describe('getLeftButtonDisabledState', () => {
        it('should return true when screen width is less than 600px and first tab is active', () => {
            const activeTabName = 'pizza';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 599;
            const scrollLeft = 0;
            expect(
                getLeftButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                }),
            ).toBe(true);
        });
        it('should return true when screen width is more than 600px and first tab is visible', () => {
            const activeTabName = 'onion';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 601;
            const scrollLeft = 0;
            expect(
                getLeftButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                }),
            ).toBe(true);
        });
        it('should return false when screen width is more than 600px and first tab is not visible', () => {
            const activeTabName = 'onion';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 601;
            const scrollLeft = 1;
            expect(
                getLeftButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                }),
            ).toBe(false);
        });
    });
    describe('getRightButtonDisabledState', () => {
        it('should return true when screen width is less than 600px and last tab is active', () => {
            const activeTabName = 'tomato';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 599;
            const scrollLeft = 0;
            const maxScroll = 0;
            expect(
                getRightButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                    maxScroll,
                }),
            ).toBe(true);
        });
        it('should return true when screen width is more than 600px and last tab is visible', () => {
            const activeTabName = 'pizza';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 601;
            const scrollLeft = 200;
            const maxScroll = 200;
            expect(
                getRightButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                    maxScroll,
                }),
            ).toBe(true);
        });
        it('should return false when screen width is more than 600px and last tab is not visible', () => {
            const activeTabName = 'pizza';
            const tabsetChildren = [
                { name: 'pizza', ref: {} },
                { name: 'onion', ref: {} },
                { name: 'tomato', ref: {} },
            ];
            const screenWidth = 601;
            const scrollLeft = 0;
            const maxScroll = 200;
            expect(
                getRightButtonDisabledState({
                    activeTabName,
                    tabsetChildren,
                    screenWidth,
                    scrollLeft,
                    maxScroll,
                }),
            ).toBe(false);
        });
    });
});
