import React, { useMemo } from 'react';
import CountryOption from '../countryOption';

export default function useCountriesList(countries) {
    return useMemo(
        () =>
            countries.map((value, index) => (
                <CountryOption key={value.isoCode} index={index} country={value} />
            )),
        [countries],
    );
}
