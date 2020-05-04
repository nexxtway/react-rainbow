import containsFiles from '../containsFiles';

describe('containsFiles', () => {
    it('should return false when there is types different than "Files"', () => {
        const param = {
            dataTransfer: {
                types: ['Files', 'image/jpg'],
            },
        };
        expect(containsFiles(param)).toBe(false);
    });

    it('should return false when types array is empty', () => {
        const param = {
            dataTransfer: {
                types: [],
            },
        };
        expect(containsFiles(param)).toBe(false);
    });

    it('should return false when types array is undefined', () => {
        const param = {
            dataTransfer: {
                types: undefined,
            },
        };
        expect(containsFiles(param)).toBe(false);
    });

    it('should return true when all types are "Files"', () => {
        const param = {
            dataTransfer: {
                types: ['Files'],
            },
        };
        expect(containsFiles(param)).toBe(true);
    });
});
