import { useMemo } from 'react';
import { findCountryByIsoCode, normalizeCountry } from '../helpers';
import countries from '../countries';

export default function useCountry(value) {
    const { isoCode } = value || {};
    return useMemo(() => {
        if (isoCode) {
            const country = findCountryByIsoCode(isoCode);
            if (country) {
                return country;
            }
        }
        return normalizeCountry(countries[201]);
    }, [isoCode]);
}
