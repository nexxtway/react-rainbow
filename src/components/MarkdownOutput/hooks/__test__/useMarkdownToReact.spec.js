import { renderHook } from '@testing-library/react-hooks';
import ReactDOMServer from 'react-dom/server';
import useMarkdownToReact from '../useMarkdownToReact';

describe('useMarkdownToReact', () => {
    it('should return valid html', () => {
        const values = [
            '# This is a level 1 header',
            '## This is a level 2 header',
            '### This is a level 3 header',
            'This is a paragraph',
            '-----',
        ];
        const patterns = [
            /<h1 class="(.*)">This is a level 1 header<\/h1>/,
            /<h2 class="(.*)">This is a level 2 header<\/h2>/,
            /<h3 class="(.*)">This is a level 3 header<\/h3>/,
            /<p class="(.*)">This is a paragraph<\/p>/,
            /<hr class="(.*)"\/>/,
        ];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useMarkdownToReact(value));
            expect(ReactDOMServer.renderToString(result.current)).toMatch(patterns[index]);
        });
    });
});
