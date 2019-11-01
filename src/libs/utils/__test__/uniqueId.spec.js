import { uniqueId } from '../';

describe('uniqueId', () => {
    it('should return the unique id', () => {
        expect(uniqueId()).toBe('1');
    });
    it('should return the unique id with the prefix passed', () => {
        expect(uniqueId('input')).toBe('input-2');
    });
});
