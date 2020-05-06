import { useMemo } from 'react';

export default function usePhone(value) {
    return useMemo(() => {
        if (value) {
            if (!isNaN(value)) {
                return value;
            }
            if (typeof value === 'object' && !isNaN(value.phone)) {
                return value.phone;
            }
        }
        return '';
    }, [value]);
}
