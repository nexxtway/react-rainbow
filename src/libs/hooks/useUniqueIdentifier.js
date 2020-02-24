import { useMemo } from 'react';
import { uniqueId } from '../../../libs/utils';

export default function useUniqueIdentifier(prefix) {
    return useMemo(() => uniqueId(prefix), [prefix]);
}
