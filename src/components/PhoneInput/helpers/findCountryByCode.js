import countriesList from '../countries';
import { normalizeCountry } from '.';

export default function findCountryByCode(countryCode) {
    const countries = countriesList.filter(value => value[3] === countryCode.toString());
    if (countries.length === 1) {
        const country = countries[0];
        return normalizeCountry(country);
    }
    if (countries.length > 1) {
        const country = countries.find(value => value[5] === 0);
        return normalizeCountry(country);
    }
    return undefined;
}
