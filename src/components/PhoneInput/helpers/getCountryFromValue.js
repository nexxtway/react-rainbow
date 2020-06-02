import { findCountryByIsoCode } from '.';
import allCountries from '../countries';

export default function getCountryFromValue(isoCode, countries) {
    if (Array.isArray(countries) && countries.length > 0) {
        if (isoCode) {
            const country = findCountryByIsoCode(isoCode, countries);
            if (country) {
                return country;
            }
        }
        const country = findCountryByIsoCode('us', countries);
        if (country) {
            return country;
        }
        return countries[0];
    }
    return findCountryByIsoCode('us', allCountries);
}
