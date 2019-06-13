import getSearchParams from '../getSearchParams';

const setupGoogleMapsMock = () => {
    const google = {
        maps: {
            LatLng: class {
                constructor(lat, lng) {
                    return { lat, lng };
                }
            },
            LatLngBounds: class {
                constructor(se, ne) {
                    return { se, ne };
                }
            },
        },
    };

    global.window.google = google;
};

beforeAll(() => {
    setupGoogleMapsMock();
});

describe('getSearchParams', () => {
    it('should convert searchOptions (with bounds and types) into google.maps.places.AutocompleteRequest search options', () => {
        const searchOptions = {
            bounds: {
                sw: {
                    latitude: -63.941264,
                    longitude: 151.2042969,
                },
                ne: {
                    latitude: 63.941264,
                    longitude: -151.2042969,
                },
            },
            types: ['address'],
        };

        expect(getSearchParams(searchOptions)).toEqual({
            bounds: {
                se: {
                    lat: -63.941264,
                    lng: 151.2042969,
                },
                ne: {
                    lat: 63.941264,
                    lng: -151.2042969,
                },
            },
            types: ['address'],
        });
    });

    it('should convert searchOptions (with location, radiusn types and country) into google.maps.places.AutocompleteRequest search options', () => {
        const searchOptions = {
            location: {
                latitude: -33.941264,
                longitude: 151.2042969,
            },
            country: 'us',
            radius: 150000,
            types: ['address'],
        };

        expect(getSearchParams(searchOptions)).toEqual({
            location: {
                lat: -33.941264,
                lng: 151.2042969,
            },
            componentRestrictions: {
                country: 'us',
            },
            radius: 150000,
            types: ['address'],
        });
    });

    it('should convert searchOptions (several countries) into google.maps.places.AutocompleteRequest search options', () => {
        const searchOptions = {
            country: ['us', 'ca'],
        };

        expect(getSearchParams(searchOptions)).toEqual({
            componentRestrictions: {
                country: ['us', 'ca'],
            },
        });
    });
});
