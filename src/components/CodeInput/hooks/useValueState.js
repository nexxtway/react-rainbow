import { useMemo } from 'react';
import getValueArray from '../helpers/getValueArray';

export default function useValueState(value, length) {
    return useMemo(() => {
        return getValueArray(value, length);
    }, [value, length]);
}
