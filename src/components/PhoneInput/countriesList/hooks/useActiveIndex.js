import { useState, useEffect } from 'react';

export default function useActiveIndex(isOpen, isFilteredCountry, countriesFiltered) {
    const [activeIndex, setActiveIndex] = useState();

    useEffect(() => {
        if (isOpen && !isFilteredCountry) {
            setActiveIndex(0);
        } else {
            setActiveIndex(-1);
        }
    }, [isFilteredCountry, isOpen, countriesFiltered]);

    return [activeIndex, setActiveIndex];
}
