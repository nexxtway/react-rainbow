import removeItemFromArray from '../removeItemFromArray';

const oldArray = ['onion', 'carrot', 'tomato', 'chard'];
const itemToRemove = 'chard';
const newArray = ['onion', 'carrot', 'tomato'];

describe('<AccordionSection/> removeItemFromArray', () => {
    it('should return a new array without the item to remove', () => {
        expect(removeItemFromArray(oldArray, itemToRemove)).toEqual(newArray);
    });
});
