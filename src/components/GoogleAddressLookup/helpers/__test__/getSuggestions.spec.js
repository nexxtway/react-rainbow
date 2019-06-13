import getSuggestions from '../getSuggestions';

const suggestions = [
    {
        description: 'Cubao, Quezon City, Metro Manila, Philippines',
        id: '7d5206442f4044a7597950c16bad9086cf034940',
        matched_substrings: [{ length: 3, offset: 0 }],
        place_id: 'ChIJ36Fj3eq3lzMRLMMPSCyg9qY',
        reference: 'ChIJ36Fj3eq3lzMRLMMPSCyg9qY',
        structured_formatting: {
            main_text: 'Cubao',
            main_text_matched_substrings: [{ length: 3, offset: 0 }],
            secondary_text: 'Quezon City, Metro Manila, Philippines',
        },
        terms: [
            { offset: 0, value: 'Cubao' },
            { offset: 7, value: 'Quezon City' },
            { offset: 20, value: 'Metro Manila' },
            { offset: 34, value: 'Philippines' },
        ],
        types: ['sublocality_level_1', 'sublocality', 'political', 'geocode'],
    },
    {
        description:
            'Cubao, Bus Terminal, Aurora Boulevard, Cubao, Quezon City, Metro Manila, Philippines',
        id: '7b66836ffb1330228728b2b1e52cffd4c078bafc',
        matched_substrings: [{ length: 3, offset: 0 }],
        place_id: 'ChIJs25tvMe3lzMRiavmdqLkHg8',
        reference: 'ChIJs25tvMe3lzMRiavmdqLkHg8',
        structured_formatting: {
            main_text: 'Cubao, Bus Terminal',
            main_text_matched_substrings: [{ length: 3, offset: 0 }],
            secondary_text: 'Aurora Boulevard, Cubao, Quezon City, Metro Manila, Philippines',
        },
        terms: [
            { offset: 0, value: 'Cubao, Bus Terminal' },
            { offset: 21, value: 'Aurora Boulevard' },
            { offset: 39, value: 'Cubao' },
            { offset: 46, value: 'Quezon City' },
            { offset: 59, value: 'Metro Manila' },
            { offset: 73, value: 'Philippines' },
        ],
        types: ['bus_station', 'transit_station', 'point_of_interest', 'establishment'],
    },
    {
        description: 'Cuba',
        id: 'd531c5fd407a4efec1d59b2e6241eea199d6edf0',
        matched_substrings: [{ length: 3, offset: 0 }],
        place_id: 'ChIJtUx6DwdJzYgRGqQQkVL3jHk',
        reference: 'ChIJtUx6DwdJzYgRGqQQkVL3jHk',
        structured_formatting: {
            main_text: 'Cuba',
            main_text_matched_substrings: [{ length: 3, offset: 0 }],
        },
        terms: [{ offset: 0, value: 'Cuba' }],
        types: ['country', 'political', 'geocode'],
    },
    {
        description: 'Cubbon Park, Sampangi Rama Nagara, Bengaluru, Karnataka, India',
        id: 'f334fb17a44b740132f72d59a7d90ab9a81300ac',
        matched_substrings: [{ length: 3, offset: 0 }],
        place_id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
        reference: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
        structured_formatting: {
            main_text: 'Cubbon Park',
            main_text_matched_substrings: [{ length: 3, offset: 0 }],
            secondary_text: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
        },
        terms: [
            { offset: 0, value: 'Cubbon Park' },
            { offset: 13, value: 'Sampangi Rama Nagara' },
            { offset: 35, value: 'Bengaluru' },
            { offset: 46, value: 'Karnataka' },
            { offset: 57, value: 'India' },
        ],
        types: ['park', 'point_of_interest', 'establishment'],
    },
];

jest.mock('../getFormattedValue', () => {
    const result = {
        label: '<span><b>Cub</b>bon Park</span>',
        description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
        icon: '<LocationItemIcon />',
    };

    return jest.fn(() => result);
});

jest.mock('../getSearchForOption', () => {
    const result = {
        data: 'Cub',
        label:
            '<span class="rainbow-google-address-lookup_search-option-label">Search for:<span class="rainbow-google-address-lookup_search-option-typing">‘Cub’</span></span>',
        icon: '<SearchValueIcon />',
    };

    return jest.fn(() => result);
});

describe('getSuggestions', () => {
    it('should return the suggestions list formated as options list for Lookup (with search term highlighted)', () => {
        const result = getSuggestions(suggestions, 'Cub');

        expect(result).toEqual([
            {
                data: 'Cub',
                label:
                    '<span class="rainbow-google-address-lookup_search-option-label">Search for:<span class="rainbow-google-address-lookup_search-option-typing">‘Cub’</span></span>',
                icon: '<SearchValueIcon />',
            },
            {
                label: '<span><b>Cub</b>bon Park</span>',
                description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
                icon: '<LocationItemIcon />',
            },
            {
                label: '<span><b>Cub</b>bon Park</span>',
                description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
                icon: '<LocationItemIcon />',
            },
            {
                label: '<span><b>Cub</b>bon Park</span>',
                description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
                icon: '<LocationItemIcon />',
            },
            {
                label: '<span><b>Cub</b>bon Park</span>',
                description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
                icon: '<LocationItemIcon />',
            },
        ]);
    });
});
