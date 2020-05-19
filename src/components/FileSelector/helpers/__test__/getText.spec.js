import getText from '../getText';

describe('getText', () => {
    it('should return placeholder when files is not defined', () => {
        expect(getText(undefined, 'placeholder text')).toBe('placeholder text');
    });

    it('should return placeholder when files is an empty array', () => {
        expect(getText([], 'placeholder text')).toBe('placeholder text');
    });

    it('should return the name of the file when files has only one item', () => {
        const files = [
            {
                name: 'filename.jpg',
            },
        ];
        expect(getText(files, '')).toBe('filename.jpg');
    });

    it('should return a string with the length of files', () => {
        const files = [
            {
                name: 'filename1.jpg',
            },
            {
                name: 'filename2.jpg',
            },
        ];
        expect(getText(files, '')).toBe('2 files');
    });
});
