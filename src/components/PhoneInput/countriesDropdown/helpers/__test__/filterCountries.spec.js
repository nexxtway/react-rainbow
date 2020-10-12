import filterCountries from '../filterCountries';

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

describe('findCountryByIsoCode', () => {
    it('should return an array with  United States country', () => {
        const queries = ['us', 'United States', '+1', '1'];
        const allCountries = [usa, ...countries];
        queries.forEach(query => expect(filterCountries(query, allCountries, usa)).toEqual([usa]));
    });

    it('should return an array with 4 countries', () => {
        const queries = ['u', '+', ''];
        const allCountries = [usa, ...countries];
        queries.forEach(query =>
            expect(filterCountries(query, allCountries, usa)).toEqual(allCountries),
        );
    });

    it('should return an empty array', () => {
        const queries = ['ww', 'España', '+111', '22'];
        const allCountries = [usa, ...countries];
        queries.forEach(query => expect(filterCountries(query, allCountries, usa)).toEqual([]));
    });
});
