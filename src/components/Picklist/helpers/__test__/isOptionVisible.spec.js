import isOptionVisible from '../isOptionVisible';

let container;
let elements;

describe('isOptionVisible', () => {
    beforeEach(() => {
        container = { top: 203.03334045410156, bottom: 428.03334045410156 };
        container.getBoundingClientRect = jest.fn(() => ({
            top: container.top,
            bottom: container.bottom,
        }));

        elements = [
            { top: 237.78334045410156, bottom: 282.78334045410156 },
            { top: 317.5333251953125, bottom: 362.5333251953125 },
            { top: 362.5333251953125, bottom: 407.5333251953125 },
            { top: 407.5333251953125, bottom: 452.5333251953125 },
            { top: 452.5333251953125, bottom: 497.5333251953125 },
            { top: 497.5333251953125, bottom: 542.5333251953125 },
            { top: 542.5333251953125, bottom: 587.5333251953125 },
            { top: 587.5333251953125, bottom: 632.5333251953125 },
            { top: 632.5333251953125, bottom: 677.5333251953125 },
        ];

        elements = elements.map(element => ({
            top: element.top,
            bottom: element.bottom,
            getBoundingClientRect: jest.fn(() => ({
                top: element.top,
                bottom: element.bottom,
            })),
        }));
    });

    it("should return true when element is within container's visible bounds", () => {
        const expectedResults = [true, true, true, false, false, false, false, false, false];
        elements.forEach((element, index) => {
            expect(isOptionVisible(element, container)).toBe(expectedResults[index]);
        });
    });
});
