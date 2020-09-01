import findNodeByFirstLetter from '../findNodeByFirstLetter';

const treeNodes = [
    {
        name: 'node-1',
        label: 'abcd',
        level: 1,
        nodePath: [0],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-2',
        label: 'bcde',
        level: 1,
        nodePath: [1],
        isExpanded: true,
        hasChildren: undefined,
    },
    {
        name: 'node-2.1',
        label: 'bcdef',
        level: 2,
        nodePath: [1, 0],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-2.2',
        label: 'bcdeg',
        level: 2,
        nodePath: [1, 1],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-3',
        label: 'cdef',
        level: 1,
        nodePath: [2],
        isExpanded: undefined,
        hasChildren: true,
    },
    {
        name: 'node-4',
        label: 'defg',
        level: 1,
        nodePath: [3],
        isExpanded: undefined,
        hasChildren: true,
    },
];

describe('findNodeByFirstLetter', () => {
    it('should return first node in list', () => {
        expect(findNodeByFirstLetter(treeNodes, 'a')).toEqual(treeNodes[0]);
        expect(findNodeByFirstLetter(treeNodes, 'a', 5)).toEqual(treeNodes[0]);
    });
    it('should return next matching node', () => {
        expect(findNodeByFirstLetter(treeNodes, 'b')).toEqual(treeNodes[1]);
        expect(findNodeByFirstLetter(treeNodes, 'b', 1)).toEqual(treeNodes[2]);
        expect(findNodeByFirstLetter(treeNodes, 'b', 2)).toEqual(treeNodes[3]);
        expect(findNodeByFirstLetter(treeNodes, 'b', 5)).toEqual(treeNodes[1]);
    });
});
