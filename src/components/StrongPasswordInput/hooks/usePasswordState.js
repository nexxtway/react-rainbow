import { useMemo } from 'react';

export default function usePasswordState(passwordState) {
    return useMemo(() => {
        const mapStatuses = { poor: 'error', average: 'warning', strong: 'success' };
        return mapStatuses[passwordState];
    }, [passwordState]);
}
