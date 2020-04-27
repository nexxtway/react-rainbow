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

const nodePath = [2, 1];

const expectedNode = {
    label: 'Tree Branch',
    isLoading: false,
    children: [{ label: 'Tree Item' }],
};

describe('getNode', () => {
    it('should return the correct node according to the parameters', () => {
        expect(getNode(tree, nodePath)).toStrictEqual(expectedNode);
    });
});
