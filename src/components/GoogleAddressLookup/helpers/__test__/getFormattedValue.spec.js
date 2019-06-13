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

describe('getFormattedValue', () => {
    it('should return the item formated without highligth', () => {
        expect(getFormattedValue(suggestion, false, <SelectedLocationIcon />)).toEqual({
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
