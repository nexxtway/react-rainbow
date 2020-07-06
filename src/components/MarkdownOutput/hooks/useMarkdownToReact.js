import { useMemo } from 'react';
import unified from 'unified';
import markdownParse from 'remark-parse';
import remark2react from 'remark-react';

export default function useMarkdown2React(source, parserOptions, plugins, renderers = {}) {
    return useMemo(() => {
        const parserPlugins = [[markdownParse, parserOptions]].concat(plugins || []);
        const markdownParser = parserPlugins.reduce((parser, plugin) => {
            return Array.isArray(plugin) ? parser.use(...plugin) : parser.use(plugin);
        }, unified());

        return markdownParser
            .use(remark2react, {
                remarkReactComponents: renderers,
            })
            .processSync(source).result;
    }, [parserOptions, plugins, renderers, source]);
}
