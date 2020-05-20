import { findCountryByIsoCode } from '.';

export default function getCountryFromValue(isoCode, countries) {
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
