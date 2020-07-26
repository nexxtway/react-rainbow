export default function filterCountries(query, countries, country) {
    if (query === '' || query === '+') {
        const filteredCountries = countries.filter(value => value.isoCode !== country.isoCode);
        filteredCountries.unshift(country);
        return filteredCountries;
    }

    const queryToLower = query.toLowerCase();
    let isFilteredCountry = false;
    const filteredCountries =
        countries.filter(value => {
            if (!isNaN(query)) {
                const index = value.countryCode.toString().indexOf(queryToLower);
                if (index === 0 || index === 1) {
                    if (value.isoCode === country.isoCode) {
                        isFilteredCountry = true;
                        return false;
                    }
                    return true;
                }
                return false;
            }
            if (
                value.country.toLowerCase().indexOf(queryToLower) !== -1 ||
                value.isoCode.indexOf(queryToLower) !== -1
            ) {
                if (value.isoCode === country.isoCode) {
                    isFilteredCountry = true;
                    return false;
                }
                return true;
            }
            return false;
        }) || [];
    if (isFilteredCountry) {
        filteredCountries.unshift(country);
    }
    return filteredCountries;
}
