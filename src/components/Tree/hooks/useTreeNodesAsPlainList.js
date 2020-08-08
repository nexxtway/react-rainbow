import { useMemo } from 'react';
import buildPlainListFromTree from '../helpers/buildPlainListFromTree';

export default function useTreeNodesAsPlainList(data) {
    const dataStr = JSON.stringify(data);
    return useMemo(() => {
        return buildPlainListFromTree(JSON.parse(dataStr));
    }, [dataStr]);
}
