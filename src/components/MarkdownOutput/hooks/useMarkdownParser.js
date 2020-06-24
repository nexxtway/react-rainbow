import { useMemo } from 'react';
import unified from 'unified';
import markdownParse from 'remark-parse';
import remark2react from 'remark-react';
import wrapTableRows from '../plugins/wrapTableRows';

export default function useMarkdownParser(source, parserOptions, plugins) {
    return useMemo(() => {
        const parserPlugins = [[markdownParse, remark2react, parserOptions]].concat(plugins || []);
        const markdownParser = parserPlugins.reduce((parser, plugin) => {
            return Array.isArray(plugin) ? parser.use(...plugin) : parser.use(plugin);
        }, unified());

        const rawSyntaxTree = markdownParser.parse(source);
        const transformedSyntaxTree = markdownParser.runSync(rawSyntaxTree);
        return wrapTableRows(transformedSyntaxTree, parserOptions);
    }, [source, parserOptions, plugins]);
}
