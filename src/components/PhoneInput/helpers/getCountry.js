import React from 'react';
import FlagIcon from '../flagIcon';

export default function getCountry(countryArray) {
    return {
        countryCode: countryArray[3],
        country: countryArray[0],
        isoCode: countryArray[2],
        flagIcon: <FlagIcon isoCode={countryArray[2]} />,
    };
}
