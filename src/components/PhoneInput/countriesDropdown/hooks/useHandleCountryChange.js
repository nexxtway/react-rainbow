import { useCallback } from 'react';

export default function useHandleCountryChange(scrollableRef, onCountryChange, setQuery) {
    return useCallback(
        newCountry => {
            setQuery('');
            scrollableRef.current.scrollTo(0, 0);
            onCountryChange(newCountry);
        },
        [onCountryChange, scrollableRef, setQuery],
    );
}
