import React from 'react';
import SearchValueIcon from '../icons/searchValueIcon';
import StyledOptionLabel from '../styled/optionLabel';
import StyledOptionTyping from '../styled/optionTyping';

export default function getSearchForOption(searchValue) {
    return {
        label: (
            <StyledOptionLabel>
                Search for:
                <StyledOptionTyping>&lsquo;{searchValue}&rsquo;</StyledOptionTyping>
            </StyledOptionLabel>
        ),
        data: searchValue,
        icon: <SearchValueIcon />,
    };
}
