import React, { useMemo } from 'react';
import unified from 'unified';
import markdownParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import defaultRenderers from '../renderers';

export default function useMarkdown2React(source) {
    return useMemo(() => {
        return unified()
            .use(markdownParse)
            .use(remark2rehype)
            .use(highlight)
            .use(rehype2react, {
                createElement: React.createElement,
                components: defaultRenderers,
            })
            .processSync(source).result;
    }, [source]);
}
