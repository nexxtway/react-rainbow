import { findCountryByIsoCode } from '.';

export default function getCountryFromValue(value, countries) {
    const { isoCode } = value || {};
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

    return findCountryByIsoCode(countries[0], countries);
}
