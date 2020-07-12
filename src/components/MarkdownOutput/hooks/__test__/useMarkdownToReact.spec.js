import { renderHook } from '@testing-library/react-hooks';
import ReactDOMServer from 'react-dom/server';
import useMarkdownToReact from '../useMarkdownToReact';

describe('useMarkdownToReact', () => {
    it('should return valid html for headings', () => {
        const values = [
            '# This is a level 1 header',
            '## This is a level 2 header',
            '### This is a level 3 header',
            '#### This is a level 4 header',
            '##### This is a level 5 header',
            '###### This is a level 6 header',
        ];
        const patterns = [
            /<h1 class="(.*)">This is a level 1 header<\/h1>/,
            /<h2 class="(.*)">This is a level 2 header<\/h2>/,
            /<h3 class="(.*)">This is a level 3 header<\/h3>/,
            /<h4 class="(.*)">This is a level 4 header<\/h4>/,
            /<h5 class="(.*)">This is a level 5 header<\/h5>/,
            /<h6 class="(.*)">This is a level 6 header<\/h6>/,
        ];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(patterns[index]);
        });
    });
    it('should return valid html for lists', () => {
        const values = [
            '- Item #1\n- Item #2\n- Item #3',
            '1. Item #1\n2. Item #2\n3. Item #3',
            '- [x] Item #1\n- [ ] Item #2\n- [ ] Item #3',
        ];
        const patterns = [
            /<ul class="(.*)">\n<li class="(.*)">Item #1<\/li>\n<li class="(.*)">Item #2<\/li>\n<li class="(.*)">Item #3<\/li>\n<\/ul>/,
            /<ol class="(.*)">\n<li class="(.*)">Item #1<\/li>\n<li class="(.*)">Item #2<\/li>\n<li class="(.*)">Item #3<\/li>\n<\/ol>/,
            /<ul class="(.*)">\n<li class="(.*)"><input type="checkbox" checked="" disabled=""\/>(.*)Item #1<\/li>\n<li class="(.*)"><input type="checkbox" disabled=""\/>(.*)Item #2<\/li>\n<li class="(.*)"><input type="checkbox" disabled=""\/>(.*)Item #3<\/li>\n<\/ul>/,
        ];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(patterns[index]);
        });
    });
    it('should return valid html for paragraphs', () => {
        const { result } = renderHook(() => useMarkdownToReact('This is a paragraph'));
        expect(ReactDOMServer.renderToString(result.current)).toMatch(
            /<p class="(.*)">This is a paragraph<\/p>/,
        );
    });
    it('should return valid html for horizontal rules', () => {
        const values = ['---', '- - -', '---------', '***', '* * *', '***************'];
        values.forEach(value => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(/<hr class="(.*)"\/>/);
        });
    });
    it('should return valid html for code', () => {
        const values = ['```js\ndoSomething();\n```', '`doSomenthing`'];
        const patterns = [
            /<pre[^>]*><code[^>]*>([^<]*)<\/code><\/pre>/,
            /<code\s[^>]*>doSomenthing<\/code>/,
        ];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(patterns[index]);
        });
    });
    it('should return valid html for tables', () => {
        const values = [
            '| Header |\n| ------- |\n| Cell |',
            '| Header |\n| :------- |\n| Cell |',
            '| Header |\n| -------: |\n| Cell |',
            '| Header |\n| :-------: |\n| Cell |',
        ];
        const patterns = [
            /<table[^>]*><thead[^>]*><tr[^>]*><td[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/,
            /<table[^>]*><thead[^>]*><tr[^>]*><td style="text-align:left"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:left"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/,
            /<table[^>]*><thead[^>]*><tr[^>]*><td style="text-align:right"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:right"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/,
            /<table[^>]*><thead[^>]*><tr[^>]*><td style="text-align:center"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:center"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/,
        ];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(patterns[index]);
        });
    });
    it('should return valid html for links', () => {
        const { result } = renderHook(() =>
            useMarkdownToReact('[Link](http://www.example.com/ "A link")'),
        );
        expect(ReactDOMServer.renderToString(result.current)).toMatch(
            /<a href="http:\/\/www.example.com\/" title="A link">Link<\/a>/i,
        );
    });
});
