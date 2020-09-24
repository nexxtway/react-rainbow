import { useMemo } from 'react';
import allCountries from '../countries';

export default function useCountries(countries) {
    return useMemo(() => {
        if (countries.length === 0) {
            return allCountries;
        }
        return allCountries.filter(country => countries.includes(country.isoCode));
    }, [countries]);
}
