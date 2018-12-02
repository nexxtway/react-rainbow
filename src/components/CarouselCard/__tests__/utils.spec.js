import {
    insertChildOrderly,
    getChildTabNodes,
    getItemIndex,
    carouselCardContainerStyles,
} from './../utils';

describe('<CarouselCard/> utils', () => {
    describe('insertChildOrderly', () => {
        it('should insert the child in the right order if the item in the nodes is at middle', () => {
            const childrenRefs = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item4' }, { ref: 'item5' }];
            const nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
            const expectedNodes = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item3' }, { ref: 'item4' }, { ref: 'item5' }];
            expect(insertChildOrderly(childrenRefs, { ref: 'item3' }, nodes)).toEqual(expectedNodes);
        });
        it('should insert the child in the right order if the item in the nodes is at end', () => {
            const childrenRefs = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item3' }];
            const nodes = ['item1', 'item2', 'item3', 'item4'];
            const expectedNodes = [{ ref: 'item1' }, { ref: 'item2' }, { ref: 'item3' }, { ref: 'item4' }];
            expect(insertChildOrderly(childrenRefs, { ref: 'item4' }, nodes)).toEqual(expectedNodes);
        });
    });
    describe('getChildTabNodes', () => {
        const elements = [
            { element: 'a', innerText: 'Julio' },
            { element: 'a', innerText: 'Pepe' },
        ];
        const ref = {
            querySelectorAll: jest.fn(() => elements),
        };
        it('should call querySelectorAll with a.rainbow-carousel-image', () => {
            getChildTabNodes(ref);
            expect(ref.querySelectorAll).toHaveBeenCalledWith('a.rainbow-carousel-image');
        });
        it('should return the elements resolved by querySelectorAll', () => {
            expect(getChildTabNodes(ref)).toEqual(elements);
        });
        it('should return an empty array if anything is passed', () => {
            expect(getChildTabNodes()).toEqual([]);
        });
    });

    describe('getItemIndex', () => {
        it('should return the index in the array of the item passed', () => {
            const children = [
                { indicatorID: 'indicator-1' },
                { indicatorID: 'indicator-2' },
                { indicatorID: 'indicator-3' },
            ];
            expect(getItemIndex(children, 'indicator-2')).toBe(1);
        });
        it('should return undefined if the item passed is not in the array', () => {
            const children = [
                { indicatorID: 'indicator-1' },
                { indicatorID: 'indicator-2' },
                { indicatorID: 'indicator-3' },
            ];
            expect(getItemIndex(children, 'indicator-4')).toBe(-1);
        });
    });

    describe('carouselCardContainerStyles', () => {
        it('should return null if a ref is not passed', () => {
            expect(carouselCardContainerStyles()).toBeNull();
        });
        it('should return null if ref passed does not have a parentNode', () => {
            const ref = {};
            expect(carouselCardContainerStyles(ref)).toBeNull();
        });
        it('should return an object with a heght of 100% if the parentNode the ref passed has an height set', () => {
            const ref = {
                parentNode: {
                    style: {
                        height: 100,
                    },
                },
            };
            expect(carouselCardContainerStyles(ref)).toEqual({
                height: '100%',
            });
        });
        it('should return an object with a heght of 340 if the parentNode of the ref passed does not have an height set', () => {
            const ref = {
                parentNode: {
                    style: {
                        height: '',
                    },
                },
            };
            expect(carouselCardContainerStyles(ref)).toEqual({
                height: 340,
            });
        });
    });
});
