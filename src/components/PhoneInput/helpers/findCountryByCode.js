export default function findCountryByCode(code, countries) {
    return countries.find(value => value.countryCode === code);
}
