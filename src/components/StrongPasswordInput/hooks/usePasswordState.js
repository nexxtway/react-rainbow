import { useMemo } from 'react';

const mapStatuses = { poor: 'error', average: 'warning', strong: 'success' };

export default function usePasswordState(passwordState) {
    return useMemo(() => {
        return mapStatuses[passwordState];
    }, [passwordState]);
}
