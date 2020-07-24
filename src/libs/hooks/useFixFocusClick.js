import { useCallback, useEffect } from 'react';
import { isFirefox, isSafari } from '../fixFocusClick/helpers';

export default function useFixFocusClick(ref) {
    const handleClick = useCallback(() => {
        ref.current.focus();
    }, [ref]);

    useEffect(() => {
        const { current: el } = ref || {};
        if (el && (isFirefox() || isSafari())) {
            el.addEventListener('click', handleClick);
        }
        return () => {
            if (el && (isFirefox() || isSafari())) {
                el.removeEventListener('click', handleClick);
            }
        };
    }, [handleClick, ref]);
}
