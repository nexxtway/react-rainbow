import buildPlainListFromTree from '../buildPlainListFromTree';

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
    {
        label: 'Empty Tree Branch',
        expanded: true,
        children: undefined,
    },
];

const plainList = [
    {
        name: 'node-1',
        label: 'tree item',
        level: 1,
        nodePath: [0],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-2',
        label: 'tree item',
        level: 1,
        nodePath: [1],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-3',
        label: 'tree branch',
        level: 1,
        nodePath: [2],
        isExpanded: true,
        hasChildren: true,
    },
    {
        name: 'node-3.1',
        label: 'tree item',
        level: 2,
        nodePath: [2, 0],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-3.2',
        label: 'tree branch',
        level: 2,
        nodePath: [2, 1],
        isExpanded: undefined,
        hasChildren: true,
    },
    {
        name: 'node-4',
        label: 'tree branch',
        level: 1,
        nodePath: [3],
        isExpanded: undefined,
        hasChildren: true,
    },
    {
        name: 'node-5',
        label: 'empty tree branch',
        level: 1,
        nodePath: [4],
        isExpanded: undefined,
        hasChildren: undefined,
    },
];

describe('buildPlainListFromTree', () => {
    it('should return all visible nodes in tree as single array', () => {
        expect(buildPlainListFromTree(tree)).toEqual(plainList);
    });
});
