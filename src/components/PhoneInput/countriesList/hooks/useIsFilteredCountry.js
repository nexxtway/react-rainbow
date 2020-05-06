import { useMemo } from 'react';

export default function useIsFilteredCountry(country, countriesFiltered) {
    return useMemo(() => countriesFiltered.indexOf(country) !== -1, [countriesFiltered, country]);
}
