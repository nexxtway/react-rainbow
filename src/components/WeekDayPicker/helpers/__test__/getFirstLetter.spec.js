import getFirstLetter from '../getFirstLetter';

describe('getFirstLetter', () => {
    it('should return the first letter from a string in uppercase', () => {
        expect(getFirstLetter('test')).toEqual('T');
    });
    it('should return empty if string no params are sent', () => {
        expect(getFirstLetter()).toEqual('');
    });
});
