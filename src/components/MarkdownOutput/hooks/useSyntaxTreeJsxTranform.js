import { useMemo } from 'react';
import defaultRenderers from '../renderers';
import { getDefinitions, astToJsx } from '../helpers';

export default function useSyntaxTreeJsxTranform(tree, customRenderers) {
    return useMemo(() => {
        return astToJsx(tree, {
            renderers: {
                ...defaultRenderers,
                ...customRenderers,
            },
            definitions: getDefinitions(tree),
        });
    }, [customRenderers, tree]);
}
