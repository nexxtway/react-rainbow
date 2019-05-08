import getUpdatedColumns from '../getUpdatedColumns';

describe('resizer helper', () => {
    describe('getUpdatedColumns', () => {
        it('should return an empty array', () => {
            const params = {
                columns: [],
                columnsMetaData: [],
                domTableWidth: 600,
                minColumnWidth: 50,
                maxColumnWidth: 150,
            };
            expect(getUpdatedColumns(params)).toEqual([]);
        });
        it('should return the right columns', () => {
            const params = {
                columns: [{ label: 'Name', field: 'name' }, { label: 'Email', field: 'email' }],
                columnsMetaData: [],
                domTableWidth: 600,
                minColumnWidth: 50,
                maxColumnWidth: 1000,
            };
            expect(getUpdatedColumns(params)).toEqual([
                {
                    label: 'Name',
                    field: 'name',
                    computedWidth: 300,
                },
                {
                    label: 'Email',
                    field: 'email',
                    computedWidth: 300,
                },
            ]);
        });
        it('should return the right columns when already have metadata', () => {
            const params = {
                columns: [
                    { label: 'Name', field: 'name', computedWidth: 35, isResized: true },
                    {
                        label: 'Email',
                        field: 'email',
                        computedWidth: 123,
                        isResized: false,
                    },
                ],
                domTableWidth: 600,
                minColumnWidth: 50,
                maxColumnWidth: 1000,
            };
            expect(getUpdatedColumns(params)).toEqual([
                {
                    label: 'Name',
                    field: 'name',
                    computedWidth: 35,
                    isResized: true,
                },
                {
                    label: 'Email',
                    field: 'email',
                    computedWidth: 565,
                    isResized: false,
                },
            ]);
        });
        it('should return the right columns when have width or defaultWidth', () => {
            const params = {
                columns: [
                    {
                        label: 'Name',
                        field: 'name',
                        width: 60,
                        computedWidth: 35,
                        isResized: false,
                    },
                    {
                        label: 'Email',
                        field: 'email',
                        defaultWidth: 120,
                        computedWidth: 123,
                        isResized: false,
                    },
                ],
                domTableWidth: 600,
                minColumnWidth: 50,
                maxColumnWidth: 1000,
            };
            expect(getUpdatedColumns(params)).toEqual([
                {
                    label: 'Name',
                    field: 'name',
                    width: 60,
                    computedWidth: 60,
                    isResized: false,
                },
                {
                    label: 'Email',
                    field: 'email',
                    defaultWidth: 120,
                    computedWidth: 120,
                    isResized: false,
                },
            ]);
        });
        it('should return the right columns when have width or defaultWidth but are resized', () => {
            const params = {
                columns: [
                    {
                        label: 'Name',
                        field: 'name',
                        width: 60,
                        computedWidth: 35,
                        isResized: true,
                    },
                    {
                        label: 'Email',
                        field: 'email',
                        defaultWidth: 120,
                        computedWidth: 123,
                        isResized: true,
                    },
                ],
                domTableWidth: 600,
                minColumnWidth: 50,
                maxColumnWidth: 1000,
            };
            expect(getUpdatedColumns(params)).toEqual([
                {
                    label: 'Name',
                    field: 'name',
                    width: 60,
                    computedWidth: 60,
                    isResized: true,
                },
                {
                    label: 'Email',
                    field: 'email',
                    defaultWidth: 120,
                    computedWidth: 123,
                    isResized: true,
                },
            ]);
        });
    });
});
