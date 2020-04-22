import { useMemo } from 'react';
import useUniqueIdentifier from './useUniqueIdentifier';

export default function useErrorMessageId(error) {
    const errorMessageId = useUniqueIdentifier('error-message');
    return useMemo(() => {
        if (error) {
            return errorMessageId;
        }
        return undefined;
    }, [errorMessageId, error]);
}
