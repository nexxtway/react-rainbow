import removeItemFromArray from '../remove-item-from-array';

const oldArray = ['onion', 'carrot', 'tomato', 'chard'];
const itemToRemove = 'chard';
const newArray = ['onion', 'carrot', 'tomato'];

describe('<AccordionSection/> removeItemFromArray', () => {
    it('should return a new array without the match item', () => {
        expect(removeItemFromArray(oldArray, itemToRemove)).toEqual(newArray);
    });
});
