import getMapContainerStyles from './../getMapContainerStyles';

describe('getMapContainerStyles', () => {
    it('should return null if a ref is not passed', () => {
        expect(getMapContainerStyles()).toBeNull();
    });
    it('should return null if ref passed does not have a parentNode', () => {
        const ref = {};
        expect(getMapContainerStyles(ref)).toBeNull();
    });
    it('should return null if the parentNode the ref passed has an height set', () => {
        const ref = {
            parentNode: {
                style: {
                    height: 100,
                },
            },
        };
        expect(getMapContainerStyles(ref)).toBeNull();
    });
    it('should return an object with a minHeght of 300 if the parentNode of the ref passed does not have an height set', () => {
        const ref = {
            parentNode: {
                style: {
                    height: '',
                },
            },
        };
        expect(getMapContainerStyles(ref)).toEqual({
            minHeight: 300,
        });
    });
});
