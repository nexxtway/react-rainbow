import isInArray from '../isInArray';

const arrayContainer = ['onion', 'carrot', 'tomato', 'chard'];
const itemToMatch = 'chard';
const itemNotMatch = 'pizza';

describe('<AccordionSection/> isInArray', () => {
    it('should return "true" when an item of the array match', () => {
        expect(isInArray(arrayContainer, itemToMatch)).toBe(true);
    });
    it('should return "false" when an item of the array not match', () => {
        expect(isInArray(arrayContainer, itemNotMatch)).toBe(false);
    });
});
