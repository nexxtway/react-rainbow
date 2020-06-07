import { useState, useMemo } from 'react';
import filterCountries from '../helpers/filterCountries';

export default function useFilterCountries(countries, country) {
    const [query, setQuery] = useState('');
    const countriesFiltered = useMemo(() => filterCountries(query, countries, country), [
        countries,
        country,
        query,
    ]);
    return [query, countriesFiltered, setQuery];
}
