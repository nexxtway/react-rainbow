import { getChildAccordionSectionNodes, insertChildOrderly } from './../utils';

describe('<Accordion/> utils', () => {
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
    describe('getChildAccordionSectionNodes', () => {
        const elements = [
            { element: 'a', innerText: 'lettuce' },
            { element: 'a', innerText: 'tomato' },
        ];
        const ref = {
            querySelectorAll: jest.fn(() => elements),
        };
        it('should call querySelectorAll with the right value', () => {
            getChildAccordionSectionNodes(ref);
            expect(ref.querySelectorAll).toHaveBeenCalledWith('li[data-id="accordion-section-li"]');
        });
        it('should return the elements resolved by querySelectorAll', () => {
            expect(getChildAccordionSectionNodes(ref)).toEqual(elements);
        });
        it('should return an empty array if anything is passed', () => {
            expect(getChildAccordionSectionNodes()).toEqual([]);
        });
    });
});
