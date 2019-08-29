import isOptionVisible from '../isOptionVisible';

let container;

describe('isOptionVisible', () => {
    beforeEach(() => {
        container = { top: 203.03334045410156, bottom: 428.03334045410156 };
        container.getBoundingClientRect = jest.fn(() => ({
            top: container.top,
            bottom: container.bottom,
        }));
    });

    it("should return true when element is within container's visible bounds", () => {
        const elements = [
            { top: 237.78334045410156, bottom: 282.78334045410156 },
            { top: 317.5333251953125, bottom: 362.5333251953125 },
            { top: 362.5333251953125, bottom: 407.5333251953125 },
        ].map(element => ({
            top: element.top,
            bottom: element.bottom,
            getBoundingClientRect: jest.fn(() => ({
                top: element.top,
                bottom: element.bottom,
            })),
        }));

        const expectedResults = [true, true, true];
        elements.forEach((element, index) => {
            expect(isOptionVisible(element, container)).toBe(expectedResults[index]);
        });
    });
    it("should return false when element is not within container's visible bounds", () => {
        const elements = [
            { top: 407.5333251953125, bottom: 452.5333251953125 },
            { top: 452.5333251953125, bottom: 497.5333251953125 },
            { top: 497.5333251953125, bottom: 542.5333251953125 },
            { top: 542.5333251953125, bottom: 587.5333251953125 },
            { top: 587.5333251953125, bottom: 632.5333251953125 },
            { top: 632.5333251953125, bottom: 677.5333251953125 },
        ].map(element => ({
            top: element.top,
            bottom: element.bottom,
            getBoundingClientRect: jest.fn(() => ({
                top: element.top,
                bottom: element.bottom,
            })),
        }));

        const expectedResults = [false, false, false, false, false, false];
        elements.forEach((element, index) => {
            expect(isOptionVisible(element, container)).toBe(expectedResults[index]);
        });
    });
});
