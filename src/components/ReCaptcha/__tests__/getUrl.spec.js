import getUrl from '../getUrl';

describe('getUrl function', () => {
    it('should return the recaptcha url without the lang param', () => {
        const url = getUrl();
        expect(url).toBe('https://www.google.com/recaptcha/api.js?render=explicit');
    });
    it('should return the recaptcha url with the lang param', () => {
        const url = getUrl('es');
        expect(url).toBe('https://www.google.com/recaptcha/api.js?render=explicit&hl=es');
    });
});
