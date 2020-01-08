import { validateColor } from '../color';

describe('validateColor', () => {
    const colors = [
        {
            value: '#01b6f5',
            result: '#01b6f5',
        },
        {
            value: 'rgb(1, 182, 245)',
            result: 'rgb(1, 182, 245)',
        },
        {
            value: 'rgba(1, 182, 245, 0.5)',
            result: 'rgba(1, 182, 245, 0.5)',
        },
    ];

    it('should return the same color passed', () => {
        colors.forEach((color, idx) => {
            expect(validateColor(color.value)).toBe(colors[idx].value);
        });
    });
    it('should return an empty string with an invalid color value', () => {
        [
            '',
            'asd',
            '#f',
            '#fZ0',
            '#ff00001',
            5,
            'rgb(1,2)',
            'rgb(1,2,333)',
            'rgb(20, 20, 20, 0.5)',
            'rgba(20, 20, 20)',
        ].forEach(color => expect(validateColor(color.value)).toBe(''));
    });
});
