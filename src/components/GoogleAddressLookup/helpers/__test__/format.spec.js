import React from 'react';
import getFormattedValue from '../getFormattedValue';
import SelectedLocationIcon from '../../icons/selectedLocationIcon';

const suggestion = {
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
        { offset: 0, value: 'Cubbon Cubbon Park' },
        { offset: 13, value: 'Sampangi Rama Nagara' },
        { offset: 35, value: 'Bengaluru' },
        { offset: 46, value: 'Karnataka' },
        { offset: 57, value: 'India' },
    ],
    types: ['park', 'point_of_interest', 'establishment'],
};

describe('formatSuggestionItem', () => {
    it('should return the item formated without highligth', () => {
        expect(getFormattedValue(suggestion, false, <SelectedLocationIcon />)).toEqual({
            id: 'ChIJL2fQ53MWrjsRuN9D6aalLMY',
            label: 'Cubbon Park, Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            description: 'Sampangi Rama Nagara, Bengaluru, Karnataka, India',
            icon: <SelectedLocationIcon />,
        });
    });
});
