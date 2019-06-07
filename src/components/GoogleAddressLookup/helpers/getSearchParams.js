export default function getSearchParams(searchOptions) {
    let searchParams = {};

    if (searchOptions) {
        const { bounds, country, location, ...otherSearchOptions } = searchOptions;

        if (bounds) {
            const {
                sw: { latitude: swLatitude, longitude: swLongitude },
                ne: { latitude: neLatitude, longitude: neLongitude },
            } = bounds;
            searchParams = Object.assign(searchParams, {
                bounds: new window.google.maps.LatLngBounds(
                    new window.google.maps.LatLng(swLatitude, swLongitude),
                    new window.google.maps.LatLng(neLatitude, neLongitude),
                ),
            });
        }

        if (location) {
            searchParams = Object.assign(searchParams, {
                location: new window.google.maps.LatLng(location.latitude, location.longitude),
            });
        }

        if (country) {
            searchParams = Object.assign(searchParams, {
                componentRestrictions: {
                    country,
                },
            });
        }

        searchParams = Object.assign(searchParams, otherSearchOptions);
    }

    return searchParams;
}
