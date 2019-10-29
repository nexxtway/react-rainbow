import { getLocaleFromContext } from '..';

describe('getLocaleFromContext', () => {
    it('should return undefined', () => {
        const contexts = [{}, null, undefined, { value: 1 }];
        contexts.forEach(context => {
            expect(getLocaleFromContext(context)).toBe(undefined);
        });
    });
    it('should return the locale value', () => {
        expect(getLocaleFromContext({ locale: 'en-US' })).toBe('en-US');
    });
});
