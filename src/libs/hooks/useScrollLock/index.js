import { useEffect } from 'react';
import useUniqueIdentifier from '../useUniqueIdentifier';
import handleOverflow from './helpers/handleOverflow';

let locks = [];
export default function useScrollLock(disabled = true) {
    const unique = useUniqueIdentifier();
    useEffect(() => {
        if (disabled) {
            locks.push(unique);
            handleOverflow(locks);
        }
        return () => {
            locks = locks.filter(lock => lock !== unique);
            handleOverflow(locks);
        };
    }, [disabled, unique]);
}
