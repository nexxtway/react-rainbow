export default function findCountryByIsoCode(isoCode, countries) {
    return countries.find(value => value.isoCode === isoCode);
}
