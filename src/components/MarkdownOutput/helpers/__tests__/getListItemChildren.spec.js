import getListItemChildren from '../getListItemChildren';

const parent = {
    node: { type: 'list', ordered: false, start: null, spread: false },
};
const originalListItemNode = {
    type: 'listItem',
    spread: false,
    checked: null,
    index: 0,
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

jest.mock('../removeListItemParagraphWrap', () => jest.fn(() => 'Item #1'));

describe('getListItemChildren', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should return same children list when loose property is true', () => {
        const { children } = originalListItemNode;
        expect(
            getListItemChildren(
                {
                    ...originalListItemNode,
                    loose: true,
                },
                parent,
            ),
        ).toEqual(children);
    });
    it('should remove paragraph node from ListItem text', () => {
        expect(getListItemChildren(originalListItemNode, parent)).toEqual('Item #1');
    });
});
