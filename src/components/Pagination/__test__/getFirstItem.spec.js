import getFirstItem from '../getFirstItem';

const pages = 7;

describe('getFirstItem function', () => {
    it('should return 1 if the activeItem is 1', () => {
        const result = getFirstItem(pages, 1);
        expect(result).toEqual(1);
    });
    it('should return 1 if the activeItem is 2', () => {
        const result = getFirstItem(pages, 2);
        expect(result).toEqual(1);
    });
    it('should return 3 if the activeItem is 7', () => {
        const result = getFirstItem(pages, 7);
        expect(result).toEqual(3);
    });
    it('should return 3 if the activeItem is 6', () => {
        const result = getFirstItem(pages, 6);
        expect(result).toEqual(3);
    });
    it('should return 2 if the activeItem is 4', () => {
        const result = getFirstItem(pages, 4);
        expect(result).toEqual(2);
    });
});
