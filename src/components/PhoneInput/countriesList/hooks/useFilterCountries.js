import { useMemo } from 'react';
import filterCountries from '../helpers/filterCountries';

export default function useFilterCountries(query, countries) {
    return useMemo(() => filterCountries(query, countries), [countries, query]);
}
