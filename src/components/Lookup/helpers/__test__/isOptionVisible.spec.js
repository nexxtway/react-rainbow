import isOptionVisible from '../isOptionVisible';

describe('isOptionVisible', () => {
    it('should return true when rect dimensions match in element and container', () => {
        const element = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 40,
                };
            },
        };
        const container = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 40,
                };
            },
        };
        expect(isOptionVisible(element, container)).toBe(true);
    });
    it('should return true when element rect dimensions are inside container', () => {
        const element = {
            getBoundingClientRect() {
                return {
                    top: 20,
                    bottom: 30,
                };
            },
        };
        const container = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 40,
                };
            },
        };
        expect(isOptionVisible(element, container)).toBe(true);
    });
    it('should return false when element top is less than container top', () => {
        const element = {
            getBoundingClientRect() {
                return {
                    top: 8,
                    bottom: 40,
                };
            },
        };
        const container = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 40,
                };
            },
        };
        expect(isOptionVisible(element, container)).toBe(false);
    });
    it('should return false when element bottom is greater than container bottom', () => {
        const element = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 41,
                };
            },
        };
        const container = {
            getBoundingClientRect() {
                return {
                    top: 10,
                    bottom: 40,
                };
            },
        };
        expect(isOptionVisible(element, container)).toBe(false);
    });
});
