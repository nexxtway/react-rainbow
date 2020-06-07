import React from 'react';
import SearchIcon from './icons/searchIcon';
import { EMContainer } from './styled';

function EmptyMessage({ emptyMsg }) {
    return (
        <EMContainer>
            <SearchIcon />
            <div className="Our-robots-did-not-f">
                Our robots did not find any match for{' '}
                <span className="text-style-1"> “{emptyMsg}”</span>
            </div>
        </EMContainer>
    );
}

export default EmptyMessage;
