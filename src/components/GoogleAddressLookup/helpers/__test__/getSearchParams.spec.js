import getSearchParams from '../getSearchParams';

global.google = {
    maps: {
        LatLng: jest.fn(() => ({})),
        LatLngBounds: jest.fn(() => ({})),
    },
};

const searchOptions = [
    {
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
    },
    {
        location: {
            latitude: -33.941264,
            longitude: 151.2042969,
        },
        country: 'us',
        radius: 150000,
        types: ['address'],
    },
    {
        country: ['us', 'ca'],
    },
];

describe('getSearchParams', () => {
    it('should convert searchOptions into google.maps.places.AutocompleteRequest search options', () => {
        expect(getSearchParams(searchOptions[0])).toEqual({
            bounds: global.google.maps.LatLngBounds(
                global.google.maps.LatLng(-63.941264, 151.2042969),
                global.google.maps.LatLng(63.941264, -151.2042969),
            ),
            types: ['address'],
        });
        expect(getSearchParams(searchOptions[1])).toEqual({
            location: global.google.maps.LatLng(-33.941264, 151.2042969),
            componentRestrictions: {
                country: 'us',
            },
            radius: 150000,
            types: ['address'],
        });
        expect(getSearchParams(searchOptions[2])).toEqual({
            componentRestrictions: {
                country: ['us', 'ca'],
            },
        });
    });
});
