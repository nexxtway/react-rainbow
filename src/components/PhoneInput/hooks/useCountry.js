import { useMemo } from 'react';
import { getCountryFromValue } from '../helpers';

export default function useCountry(value, countries) {
    const { isoCode } = value || {};
    return useMemo(() => getCountryFromValue(isoCode, countries), [countries, isoCode]);
}
