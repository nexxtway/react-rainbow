import { useMemo } from 'react';
import unified from 'unified';
import markdownParse from 'remark-parse';
import remark2react from 'remark-react';
import defaultRenderers from '../renderers';

export default function useMarkdown2React(source) {
    return useMemo(() => {
        return unified()
            .use(markdownParse)
            .use(remark2react, {
                remarkReactComponents: defaultRenderers,
            })
            .processSync(source).result;
    }, [source]);
}
