import { useMemo } from 'react';
import useUniqueIdentifier from './useUniqueIdentifier';

export default function useLabelId(label) {
    const labelId = useUniqueIdentifier('label');
    return useMemo(() => {
        if (label) {
            return labelId;
        }
        return undefined;
    }, [labelId, label]);
}
