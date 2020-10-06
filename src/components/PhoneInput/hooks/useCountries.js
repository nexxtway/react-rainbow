import { useMemo } from 'react';
import allCountries from '../countries';
import customWarning from './../customWarning';

export default function useCountries(countries) {
    return useMemo(() => {
        if (countries.length === 0) {
            return allCountries;
        }
        if (allCountries.filter(country => countries.includes(country.isoCode)).length === 0) {
            customWarning();
            return allCountries;
        }
        return allCountries.filter(country => countries.includes(country.isoCode));
    }, [countries]);
}
