import { useMemo } from 'react';

const mapStatuses = { weak: 'error', average: 'warning', strong: 'success' };

export default function usePasswordState(passwordState) {
    return useMemo(() => {
        return mapStatuses[passwordState];
    }, [passwordState]);
}
