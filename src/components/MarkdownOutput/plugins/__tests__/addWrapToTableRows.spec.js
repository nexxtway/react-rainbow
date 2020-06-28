import addWrapToTableRows from '../addWrapToTableRows';

const originalSyntaxTree = {
    type: 'root',
    children: [
        {
            type: 'table',
            align: [null, null],
            children: [
                {
                    type: 'tableRow',
                    position: {
                        start: { line: 1, column: 1, offset: 0 },
                        end: { line: 1, column: 30, offset: 29 },
                    },
                },
                {
                    type: 'tableRow',
                    position: {
                        start: { line: 3, column: 1, offset: 60 },
                        end: { line: 3, column: 30, offset: 89 },
                    },
                },
            ],
            position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 30, offset: 89 },
            },
        },
    ],
    position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 3, column: 30, offset: 89 },
    },
};

const wrappedSyntaxTree = {
    type: 'root',
    children: [
        {
            type: 'table',
            align: [null, null],
            children: [
                {
                    type: 'tableHead',
                    align: [null, null],
                    children: [
                        {
                            type: 'tableRow',
                            position: {
                                start: { line: 1, column: 1, offset: 0 },
                                end: { line: 1, column: 30, offset: 29 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 1, column: 1, offset: 0 },
                        end: { line: 1, column: 30, offset: 29 },
                    },
                },
                {
                    type: 'tableBody',
                    align: [null, null],
                    children: [
                        {
                            type: 'tableRow',
                            position: {
                                start: { line: 3, column: 1, offset: 60 },
                                end: { line: 3, column: 30, offset: 89 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 3, column: 1, offset: 60 },
                        end: { line: 3, column: 30, offset: 89 },
                    },
                },
            ],
            position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 30, offset: 89 },
            },
        },
    ],
    position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 3, column: 30, offset: 89 },
    },
};

describe('addWrapToTableRows', () => {
    it('should wrap table rows ', () => {
        expect(addWrapToTableRows(originalSyntaxTree)).toEqual(wrappedSyntaxTree);
    });
});
