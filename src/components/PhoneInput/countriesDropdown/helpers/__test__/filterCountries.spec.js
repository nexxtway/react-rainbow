import filterCountries from '../filterCountries';

const us = {
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

describe('findCountryByIsoCode', () => {
    it('should return an array with  United States country', () => {
        const queries = ['us', 'United States', '+1', '1'];
        const allCountries = [us, ...countries];
        queries.forEach(query => expect(filterCountries(query, allCountries, us)).toEqual([us]));
    });

    it('should return an array with 4 countries', () => {
        const queries = ['u', '+', ''];
        const allCountries = [us, ...countries];
        queries.forEach(query =>
            expect(filterCountries(query, allCountries, us)).toEqual(allCountries),
        );
    });

    it('should return an empty array', () => {
        const queries = ['ww', 'España', '+111', '22'];
        const allCountries = [us, ...countries];
        queries.forEach(query => expect(filterCountries(query, allCountries, us)).toEqual([]));
    });
});
