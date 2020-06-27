import { useMemo } from 'react';
import defaultRenderers from '../renderers';
import { getDefinitions, astToJsx } from '../helpers';

export default function useSyntaxTreeJsxTranform(tree, options, customRenderers) {
    return useMemo(() => {
        return astToJsx(tree, {
            ...options,
            renderers: {
                ...defaultRenderers,
                ...customRenderers,
            },
            definitions: getDefinitions(tree),
        });
    }, [tree, options, customRenderers]);
}
