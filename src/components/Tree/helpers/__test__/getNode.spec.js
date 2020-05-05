import getNode from '../getNode';

const tree = [
    { label: 'Tree Item' },
    { label: 'Tree Item' },
    {
        label: 'Tree Branch',
        isExpanded: true,
        children: [
            { label: 'Tree Item' },
            {
                label: 'Tree Branch',
                isLoading: false,
                children: [{ label: 'Tree Item' }],
            },
        ],
    },
    {
        label: 'Tree Branch',
        children: [
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
        ],
    },
];

describe('getNode', () => {
    it('should return the right node when nodePath has only one element', () => {
        const nodePath = [2];
        const expectedNode = {
            label: 'Tree Branch',
            isExpanded: true,
            children: [
                { label: 'Tree Item' },
                {
                    label: 'Tree Branch',
                    isLoading: false,
                    children: [{ label: 'Tree Item' }],
                },
            ],
        };
        expect(getNode(tree, nodePath)).toStrictEqual(expectedNode);
    });
    it('should return the right node when nodePath has more than one element', () => {
        const nodePath = [2, 1];
        const expectedNode = {
            label: 'Tree Branch',
            isLoading: false,
            children: [{ label: 'Tree Item' }],
        };
        expect(getNode(tree, nodePath)).toStrictEqual(expectedNode);
    });
});
