import removeListItemParagraphWrap from '../removeListItemParagraphWrap';

describe('removeListItemParagraphWrap', () => {
    it('should return same children list', () => {
        const originalListNode = {
            children: [
                {
                    type: 'text',
                    value: 'Item #1',
                },
            ],
        };

        const newChildrenList = [
            {
                type: 'text',
                value: 'Item #1',
            },
        ];
        expect(removeListItemParagraphWrap(originalListNode)).toEqual(newChildrenList);
    });

    it('should return empty list', () => {
        const originalListNode = {
            children: [
                {
                    type: 'paragraph',
                },
            ],
        };

        expect(removeListItemParagraphWrap(originalListNode)).toEqual([]);
    });
    it('should remove wrapping paragraph from children', () => {
        const originalListNode = {
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            value: 'Item #1',
                        },
                    ],
                },
            ],
        };

        const newChildrenList = [
            {
                type: 'text',
                value: 'Item #1',
            },
        ];
        expect(removeListItemParagraphWrap(originalListNode)).toEqual(newChildrenList);
    });
});
