import { useCallback } from 'react';

export default function useHandleCountryChange(phone, onChange, setFocusIndex, isOpen) {
    return useCallback(
        newCountry => {
            console.log({
                countryCode: newCountry.countryCode,
                isoCode: newCountry.isoCode,
                phone,
            });
            setFocusIndex(2);
            onChange({
                countryCode: newCountry.countryCode,
                isoCode: newCountry.isoCode,
                phone,
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isOpen],
    );
}
