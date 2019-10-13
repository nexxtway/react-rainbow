import React from 'react';
import getSearchForOption from '../getSearchForOption';
import SearchValueIcon from '../../icons/searchValueIcon';

describe('getSearchForOption', () => {
    it('should return the search term formated as option for Lookup', () => {
        const { label, data, icon } = getSearchForOption('110 sw');

        const result = {
            label,
            data,
            icon,
        };

        expect(result).toEqual({
            label,
            data: '110 sw',
            icon: <SearchValueIcon />,
        });
    });
});
