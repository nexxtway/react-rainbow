export default function filterCountries(query, countries) {
    if (query === '') {
        return countries;
    }

    if (!isNaN(query)) {
        return (
            countries.filter(value => {
                const index = value.countryCode.toString().indexOf(query);
                if (index === 0 || index === 1) {
                    return true;
                }
            }) || []
        );
    }
    const filteredByName = countries.filter(
        value => value.country.toLowerCase().indexOf(query) !== -1,
    );
    const filteredByIsoCode = countries.filter(value => value.isoCode.indexOf(query) !== -1);

    return [...filteredByName, ...filteredByIsoCode].filter(
        (item, index, arr) => arr.indexOf(item) === index,
    );
}
