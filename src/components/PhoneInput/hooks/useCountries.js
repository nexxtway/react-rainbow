import { useMemo } from 'react';
import allCountries from '../countries';

export default function useCountries(countries) {
    return useMemo(() => allCountries.filter(country => countries.includes(country.isoCode)), [
        countries,
    ]);
}
