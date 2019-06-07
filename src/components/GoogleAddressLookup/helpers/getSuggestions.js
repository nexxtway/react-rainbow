import React from 'react';
import getSearchForOption from './getSearchForOption';
import getFormattedValue from './getFormattedValue';
import LocationItemIcon from '../icons/locationItemIcon';

export default function getSuggestions(results, searchValue) {
    return [getSearchForOption(searchValue)].concat(
        results.map(place => getFormattedValue(place, true, <LocationItemIcon />)),
    );
}
