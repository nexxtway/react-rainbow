import getOptionsHighlighted from '../getOptionsHighlighted';

jest.mock('../getStringHighlighted', () =>
    jest.fn(stringValue => {
        const stringsList = ['Apple', 'Pineapple', 'Application'];
        const highlightList = [
            '<span><b>App</b>le</span>',
            '<span>Pine<b>app</b>le</span>',
            '<span><b>App</b>lication</span>',
        ];

        const index = stringsList.indexOf(stringValue);
        return highlightList[index];
    }),
);

const optionsList = [
    {
        label: 'Apple',
    },
    {
        label: 'Pineapple',
    },
    {
        label: 'Application',
    },
];

const highlightedOptions = [
    {
        label: '<span><b>App</b>le</span>',
        labelOrig: 'Apple',
    },
    {
        label: '<span>Pine<b>app</b>le</span>',
        labelOrig: 'Pineapple',
    },
    {
        label: '<span><b>App</b>lication</span>',
        labelOrig: 'Application',
    },
];

describe('getOptionsHighlighted', () => {
    it('should return same options when highlightValue is empty', () => {
        const searchTerms = [undefined, null, '', -1, [], {}];
        searchTerms.forEach(searchTerm => {
            expect(getOptionsHighlighted(optionsList, searchTerm)).toEqual(optionsList);
        });
    });
    it('should return options with label highlighted', () => {
        const searchTerms = ['app', 'App'];
        searchTerms.forEach(searchTerm => {
            expect(getOptionsHighlighted(optionsList, searchTerm)).toEqual(highlightedOptions);
        });
    });
});
