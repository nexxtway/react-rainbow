import React from 'react';
import ReactDOMServer from 'react-dom/server';
import getFormattedValue from '../getFormattedValue';
import SelectedLocationIcon from '../../icons/selectedLocationIcon';

const suggestion = {
    description: 'Cubbon Cubbon Park, Sampangi Rama Nagara, Bengaluru, Karnataka, India',
    id: 'f334fb17a44b740132f72d59a7d90ab9a81300ac',
    matched_substrings: [{ length: 3, offset: 0 }, { length: 3, offset: 7 }],
    place_id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
    reference: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
    structured_formatting: {
        main_text: 'Cubbon Cubbon Park',
        main_text_matched_substrings: [{ length: 3, offset: 0 }, { length: 3, offset: 7 }],
        secondary_text: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
    },
    terms: [
        { offset: 0, value: 'Cubbon Cubbon Park' },
        { offset: 13, value: 'Sampangi Rama Nagara' },
        { offset: 35, value: 'Bengaluru' },
        { offset: 46, value: 'Karnataka' },
        { offset: 57, value: 'India' },
    ],
    types: ['park', 'point_of_interest', 'establishment'],
};

const placeDetails = {
    address_components: [
        {
            long_name: 'India',
            short_name: 'IN',
            types: ['country', 'political'],
        },
        {
            long_name: 'Shivaji Nagar',
            short_name: 'Shivaji Nagar',
            types: ['sublocality_level_1', 'sublocality', 'political'],
        },
        {
            long_name: 'Bengaluru',
            short_name: 'Bengaluru',
            types: ['locality', 'political'],
        },
        {
            long_name: 'Bangalore Urban',
            short_name: 'Bangalore Urban',
            types: ['administrative_area_level_2', 'political'],
        },
        {
            long_name: 'Karnataka',
            short_name: 'KA',
            types: ['administrative_area_level_1', 'political'],
        },
        {
            long_name: '560001',
            short_name: '560001',
            types: ['postal_code'],
        },
    ],
    adr_address:
        "<span class='extended-address'>Shivaji Nagar</span>, <span class='locality'>Bengaluru</span>, <span class='region'>Karnataka</span> <span class='postal-code'>560001</span>, <span class='country-name'>India</span>",
    formatted_address: 'Shivaji Nagar, Bengaluru, Karnataka 560001, India',
    geometry: {
        location: {
            lat: 12.9809008,
            lng: 77.59746539999992,
        },
        viewport: {
            south: 12.9794647197085,
            west: 77.59630101970856,
            north: 12.9821626802915,
            east: 77.59899898029153,
        },
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: 'c51837ddb035e9aec72fe4dfb794661aa4d44a26',
    name: 'Cubbon Park',
    photos: [
        {
            height: 2988,
            html_attributions: [
                "<a href='https://maps.google.com/maps/contrib/116063090267824124340/photos'>Manivannan jaganathan</a>",
            ],
            width: 5312,
        },
        {
            height: 1440,
            html_attributions: [
                "<a href='https://maps.google.com/maps/contrib/101608401892989729690/photos'>Bharama Nayak</a>",
            ],
            width: 2560,
        },
        {
            height: 1520,
            html_attributions: [
                "<a href='https://maps.google.com/maps/contrib/103574979848978284874/photos'>Saurabh Guna</a>",
            ],
            width: 2688,
        },
    ],
    place_id: 'ChIJdUZ_eWUWrjsRfo6CcEaixkU',
    plus_code: {
        compound_code: 'XHJW+9X Bengaluru, Karnataka, India',
        global_code: '7J4VXHJW+9X',
    },
    rating: 4.5,
    reference: 'ChIJdUZ_eWUWrjsRfo6CcEaixkU',
    reviews: [
        {
            author_name: 'Chandrasekharan P',
            author_url: 'https://www.google.com/maps/contrib/118164881383702378784/reviews',
            language: 'en',
            profile_photo_url:
                'https://lh3.googleusercontent.com/-Wr7J86R2zis/AAAAAAAAAAI/AAAAAAAAAAs/kpmcaZgD4sM/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
            rating: 5,
            relative_time_description: 'a week ago',
            text:
                "One won't expect such a lush green park inside such a big city .The park was named after Mr Cubbon who was Commissioner of Mysore  for a long time but name is now officially Chamarajendra Park. The park is full of big trees with lots of birds and squirrels everywhere. There's an octagonal bandstand in the middle of a lawn. The building of High court can be seen from the lawn. People can be seen strolling leisurely along the pavements or sitting and talking in groups. It is indeed a relaxing and joyful experience to visit the park  !",
            time: 1559523846,
        },
    ],
    scope: 'GOOGLE',
    types: ['subway_station', 'transit_station', 'point_of_interest', 'establishment'],
    url: 'https://maps.google.com/?cid=5027884457424752254',
    user_ratings_total: 488,
    utc_offset: 330,
    vicinity: 'India',
    website: 'http://www.bmrc.co.in/',
    html_attributions: [],
    predictionInfo: suggestion,
};

describe('getFormattedValue', () => {
    it('should return the item formated without highligth', () => {
        expect(getFormattedValue(suggestion, false, <SelectedLocationIcon />)).toEqual({
            id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
            label: 'Cubbon Cubbon Park, Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            icon: <SelectedLocationIcon />,
        });
    });

    it('should return the item formated without highligth', () => {
        expect(getFormattedValue(placeDetails, false, <SelectedLocationIcon />)).toEqual({
            id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
            label: 'Cubbon Cubbon Park, Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            icon: <SelectedLocationIcon />,
        });
    });

    it('should return the item formated with search term highlighted', () => {
        const { id, label, description, icon } = getFormattedValue(
            suggestion,
            true,
            <SelectedLocationIcon />,
        );
        const result = {
            id,
            label: ReactDOMServer.renderToStaticMarkup(label),
            description,
            icon,
        };

        expect(result).toEqual({
            id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
            label: '<span><b>Cub</b>bon <b>Cub</b>bon Park</span>',
            description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            icon: <SelectedLocationIcon />,
        });
    });

    it('should return the item formated with search term highlighted', () => {
        const { id, label, description, icon } = getFormattedValue(
            placeDetails,
            true,
            <SelectedLocationIcon />,
        );
        const result = {
            id,
            label: ReactDOMServer.renderToStaticMarkup(label),
            description,
            icon,
        };

        expect(result).toEqual({
            id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
            label: '<span><b>Cub</b>bon <b>Cub</b>bon Park</span>',
            description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            icon: <SelectedLocationIcon />,
        });
    });

    it('should return the item formated without highligth when values is string', () => {
        expect(getFormattedValue('Cubbon Cubbon Park', true, <SelectedLocationIcon />)).toEqual({
            label: 'Cubbon Cubbon Park',
            icon: <SelectedLocationIcon />,
        });
    });

    it('should return null when value is empty', () => {
        expect(getFormattedValue('', true, <SelectedLocationIcon />)).toEqual(null);
    });

    it('should return null when value is null', () => {
        expect(getFormattedValue(null, true, <SelectedLocationIcon />)).toEqual(null);
    });
});
