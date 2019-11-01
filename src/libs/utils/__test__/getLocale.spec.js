import { getLocale } from '..';
import * as getBrowserLocale from '../getBrowserLocale';

describe('getLocale', () => {
    beforeAll(() => {
        getBrowserLocale.default = jest.fn(() => 'es-ES');
    });
    it('should return the browser local', () => {
        const contexts = [{}, null, undefined, { value: 1 }];
        contexts.forEach(context => {
            expect(getLocale(context, undefined)).toBe('es-ES');
        });
    });
    it('should return the locale value', () => {
        expect(getLocale({ locale: 'en-US' }, undefined)).toBe('en-US');
    });
    it('should return the localeProp value', () => {
        expect(getLocale({ locale: 'en-US' }, 'fr-FR')).toBe('fr-FR');
    });
});
