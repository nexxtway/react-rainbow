/* eslint-disable id-length */
import positionResolver from '../lookupPositionResolver';

describe('positionResolver', () => {
    it('should add the trigger width to the position result', () => {
        const position = positionResolver({
            trigger: {
                leftUpAnchor: {
                    x: 0,
                    y: 0,
                },
                leftBottomAnchor: {
                    x: 0,
                    y: 0,
                },
                rightUpAnchor: {
                    x: 0,
                    y: 0,
                },
                rightBottomAnchor: {
                    x: 0,
                    y: 0,
                },
                width: 100,
            },
            viewport: {
                width: 1366,
            },
            content: {
                width: 50,
                height: 50,
            },
        });
        expect(position.width).toBe(100);
    });
});
