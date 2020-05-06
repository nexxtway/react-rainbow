import React, { useMemo } from 'react';
import CountryOption from '../countryOption';

export default function useCountriesList(countries) {
    return useMemo(
        () =>
            countries.map((country, index) => (
                <CountryOption key={country.isoCode} index={index} country={country} />
            )),
        [countries],
    );
}
