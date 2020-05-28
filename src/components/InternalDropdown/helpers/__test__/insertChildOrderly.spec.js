import insertChildOrderly from '../insertChildOrderly';

describe('insertChildOrderly', () => {
    it('should insert the child in the right order if the item in the nodes is at middle', () => {
        const children = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item4' }, { ref: 'item5' }];
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
