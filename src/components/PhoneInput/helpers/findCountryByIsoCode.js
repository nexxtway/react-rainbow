import countries from '../countries';
import { normalizeCountry } from '.';

export default function findCountryByIsoCode(isoCode) {
    console.log(countries.length);
    const country = countries.find(value => value[2] === isoCode);
    if (country) {
        return normalizeCountry(country);
    }
    return undefined;
}
