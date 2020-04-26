export default function normalizeCountry(country) {
    return {
        countryCode: country[3],
        name: country[0],
        isoCode: country[2],
    };
}
