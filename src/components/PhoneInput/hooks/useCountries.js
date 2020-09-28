import { useMemo } from 'react';
import allCountries from '../countries';

export default function useCountries(countries) {
    return useMemo(() => {
        if ((countries.length === 0)) {
            return allCountries;
        }
        if ((allCountries.filter(country => countries.includes(country.isoCode))).length === 0) {
            console.warn('You have entered an invalid country code or empty input');
            return allCountries;
        } 
        return allCountries.filter(country => countries.includes(country.isoCode));
    }, [countries]);
}
