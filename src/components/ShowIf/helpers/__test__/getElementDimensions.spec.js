/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import getElementDimensions from '../getElementDimensions';

describe('getElementDimensions', () => {
    it('should return the right dimensions', () => {
        const dimensions = { width: 50, height: 50 };
        const element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: () => dimensions,
        };
        expect(getElementDimensions(element)).toEqual(dimensions);
    });

    it('should modify the styles to get client rect correctly', () => {
        const dimensions = { width: 50, height: 50 };
        const element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: function() {
                const { position, visibility, display } = this.style;
                if (position === 'absolute' && visibility === 'hidden' && display === 'block') {
                    return dimensions;
                }
                return undefined;
            },
        };
        getElementDimensions(element);
        expect(element.style).toEqual({
            position: 'relative',
            display: 'none',
            visibility: 'hidden',
        });
    });

    it('should leave the element styles as passed', () => {
        const dimensions = { width: 50, height: 50 };
        const element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: () => dimensions,
        };
        getElementDimensions(element);
        expect(element.style).toEqual({
            position: 'relative',
            display: 'none',
            visibility: 'hidden',
        });
    });

    it('should return undefined when there is no element', () => {
        expect(getElementDimensions(null)).toBe(undefined);
    });
});
