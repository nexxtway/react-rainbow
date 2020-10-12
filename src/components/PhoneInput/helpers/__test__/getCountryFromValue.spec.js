import { getCountryFromValue } from '..';

const usa = {
    countryCode: '+1',
    country: 'United States',
    isoCode: 'us',
};

const countries = [
    {
        countryCode: '+44',
        country: 'United Kingdom',
        isoCode: 'gb',
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

jest.mock('../../countries', () => [
    {
        countryCode: '+1',
        country: 'United States',
        isoCode: 'us',
    },
]);

describe('findCountryByIsoCode', () => {
    it('should return a right country', () => {
        const uruguay = countries[1];
        expect(getCountryFromValue('uy', countries)).toEqual(uruguay);
    });

    it('should return United States country', () => {
        const isoCodes = ['es', false];
        isoCodes.forEach(isoCode =>
            expect(getCountryFromValue(isoCode, [...countries, usa])).toEqual(usa),
        );
    });

    it('should return United Kingdom country', () => {
        const unitedKingdom = countries[0];
        expect(getCountryFromValue('es', countries)).toEqual(unitedKingdom);
    });

    it('should return United States country when countries is empty array', () => {
        expect(getCountryFromValue('us', [])).toEqual(usa);
    });
});
