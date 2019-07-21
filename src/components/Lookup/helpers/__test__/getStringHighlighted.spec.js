import ReactDOMServer from 'react-dom/server';
import getStringHighlighted from '../getStringHighlighted';

describe('getStringHighlighted', () => {
    it('should return same string when highlightValue is empty', () => {
        const stringValue = 'This is a sample string';
        const searchTerms = [undefined, null, '', -1, [], {}];

        searchTerms.forEach(searchTerm => {
            expect(getStringHighlighted(stringValue, searchTerm)).toEqual(stringValue);
        });
    });
    it('should return same string when highlightValue is not empty but has no match', () => {
        const stringValue = 'This is a sample string';
        const searchTerms = ['apple', 'country', 'date'];

        searchTerms.forEach(searchTerm => {
            expect(getStringHighlighted(stringValue, searchTerm)).toEqual(stringValue);
        });
    });
    it('should return highlighted string', () => {
        const stringValue = 'This is a sample string';
        const searchTerms = ['Sam', 'sam'];
        const searchTerms2 = ['Thi', 'thi'];

        searchTerms.forEach(searchTerm => {
            const formattedString = getStringHighlighted(stringValue, searchTerm);
            const result = ReactDOMServer.renderToStaticMarkup(formattedString);
            expect(result).toEqual('<span>This is a <b>sam</b>ple string</span>');
        });

        searchTerms2.forEach(searchTerm => {
            const formattedString = getStringHighlighted(stringValue, searchTerm);
            const result = ReactDOMServer.renderToStaticMarkup(formattedString);
            expect(result).toEqual('<span><b>Thi</b>s is a sample string</span>');
        });
    });
});
