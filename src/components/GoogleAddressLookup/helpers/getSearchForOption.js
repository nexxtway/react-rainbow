import React from 'react';
import SearchValueIcon from '../icons/searchValueIcon';

export default function getSearchForOption(searchValue) {
    return {
        label: (
            <span className="rainbow-google-address-lookup_search-option-label">
                Search for: <b>&lsquo;{searchValue}&rsquo;</b>
            </span>
        ),
        icon: <SearchValueIcon />,
    };
}
