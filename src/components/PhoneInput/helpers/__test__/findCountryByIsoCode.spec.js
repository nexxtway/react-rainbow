import { findCountryByIsoCode } from '..';

const countries = [
    {
        countryCode: '+44',
        country: 'United Kingdom',
        isoCode: 'gb',
    },
    {
        countryCode: '+1',
        country: 'United States',
        isoCode: 'us',
    },
    {
        countryCode: '+598',
        country: 'Uruguay',
        isoCode: 'uy',
    },
    {
        countryCode: '+998',
        country: 'Uzbekistan',
        isoCode: 'uz',
    },
];

describe('findCountryByIsoCode', () => {
    it('should return a right country', () => {
        const country = {
            countryCode: '+1',
            country: 'United States',
            isoCode: 'us',
        };
        expect(findCountryByIsoCode('us', countries)).toEqual(country);
    });

    it('should return undefined when isoCode is wront', () => {
        expect(findCountryByIsoCode('ww', countries)).toEqual(undefined);
    });
});
