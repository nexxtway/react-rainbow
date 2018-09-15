const PageInput = require('./../../src/components/Input/pageObject');

const INPUT = '#input';

describe('Input base example', () => {
    beforeEach(() => {
        browser.url('/#!/Input/1');
        browser.refresh();
    });
    it('should put the input focused when is clicked', () => {
        const input = new PageInput(INPUT);
        input.click();
        expect(input.hasFocusInput()).toBe(true);
    });
    it('should type in the input element', () => {
        const input = new PageInput(INPUT);
        input.setValue('test text');
        expect(input.getValue()).toBe('test text');
    });
});
