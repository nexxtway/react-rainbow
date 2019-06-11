import React from 'react';
import ReactDOMServer from 'react-dom/server';
import getSearchForOption from '../getSearchForOption';
import SearchValueIcon from '../../icons/searchValueIcon';

describe('getSearchForOption', () => {
    it('should return the search term formated as option for Lookup', () => {
        const { label, data, icon } = getSearchForOption('110 sw');

        const result = {
            label: ReactDOMServer.renderToStaticMarkup(label),
            data,
            icon,
        };

        expect(result).toEqual({
            label:
                '<span class="rainbow-google-address-lookup_search-option-label">Search for:<span class="rainbow-google-address-lookup_search-option-typing">‘110 sw’</span></span>',
            data: '110 sw',
            icon: <SearchValueIcon />,
        });
    });
});
