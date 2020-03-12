import isContentHidden from '../isContentHidden';

window.getComputedStyle = element => ({
    getPropertyValue: property => element.style[property],
});

describe('isContentHidden', () => {
    it('should return true when the element has zero size and does not has content', () => {
        const element = {
            offsetWidth: 0,
            offsetHeight: 0,
            innerHTML: null,
        };
        expect(isContentHidden(element)).toBe(true);
    });
    it('should return true when the element has zero size and content, but overflow style is other than visible', () => {
        const element = {
            offsetWidth: 0,
            offsetHeight: 0,
            innerHTML: 'some content',
            style: {
                overflow: 'hidden',
            },
        };
        expect(isContentHidden(element)).toBe(true);
    });
    it('should return false when the element has zero size and content, but overflow style is visible', () => {
        const element = {
            offsetWidth: 0,
            offsetHeight: 0,
            innerHTML: 'some content',
            style: {
                overflow: 'visible',
            },
        };
        expect(isContentHidden(element)).toBe(false);
    });
    it('should return false when the element has not zero size, but display style is other than none', () => {
        const element = {
            offsetWidth: 10,
            style: {
                display: 'block',
            },
        };
        expect(isContentHidden(element)).toBe(false);
    });
    it('should return true when the element has not zero size, but display style is none', () => {
        const element = {
            offsetWidth: 0,
            offsetHeight: 10,
            style: {
                display: 'none',
            },
        };
        expect(isContentHidden(element)).toBe(true);
    });
});
