import { useMemo } from 'react';
import allCountries from '../countries';
import customWarning from './../customWarning';

export default function useCountries(countries) {
    return useMemo(() => {
        const filteredCountries = allCountries.filter(country =>
            countries.includes(country.isoCode),
        );

        if (countries.length === 0) {
            return allCountries;
        }
        if (filteredCountries.length === 0) {
            customWarning();
            return allCountries;
        }
        return filteredCountries;
    }, [countries]);
}
