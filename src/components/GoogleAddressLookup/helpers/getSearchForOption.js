import React from 'react';
import SearchValueIcon from '../icons/searchValueIcon';

export default function getSearchForOption(searchValue) {
    return {
        label: (
            <span className="rainbow-google-address-lookup_search-option-label">
                Search for:
                <span className="rainbow-google-address-lookup_search-option-typing">
                    &lsquo;{searchValue}&rsquo;
                </span>
            </span>
        ),
        data: searchValue,
        icon: <SearchValueIcon />,
    };
}
