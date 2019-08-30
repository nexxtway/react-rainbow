import getPageItems from './../helpers/getPageItems';

const data = [
    { name: 'Leandro Torres' },
    { name: 'JL Torres' },
    { name: 'Reinier' },
    { sname: 'Sara' },
    { name: 'Tahimi L' },
    { name: 'Saray' },
    { name: 'J Leandro Torres' },
    { name: 'Tahimi' },
    { name: 'Sara P' },
    { sname: 'Leo Torres' },
];

describe('<getPageItems />', () => {
    it('should return the same data passed when pageSize is greater than data length', () => {
        const activePage = 3;
        const pageSize = 12;
        expect(getPageItems({ data, activePage, pageSize })).toEqual(data);
    });
    it('should return the right sliced data when pageSize is less than data length', () => {
        const activePages = [1, 2];
        const pageSize = 5;
        const expectedValues = [
            [
                { name: 'Leandro Torres' },
                { name: 'JL Torres' },
                { name: 'Reinier' },
                { sname: 'Sara' },
                { name: 'Tahimi L' },
            ],
            [
                { name: 'Saray' },
                { name: 'J Leandro Torres' },
                { name: 'Tahimi' },
                { name: 'Sara P' },
                { sname: 'Leo Torres' },
            ],
        ];
        activePages.forEach((activePage, index) => {
            expect(getPageItems({ data, activePage, pageSize })).toEqual(expectedValues[index]);
        });
    });
});
