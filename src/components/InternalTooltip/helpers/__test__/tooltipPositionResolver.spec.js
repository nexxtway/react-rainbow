/* eslint-disable id-length */
import tooltipPositionResolver from '../tooltipPositionResolver';

describe('tooltipPositionResolver', () => {
    it('should return position at 0:0 when viewport is smaller than content', () => {
        const param = {
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
            },
            viewport: {
                width: 200,
                height: 200,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        expect(tooltipPositionResolver(param)).toEqual({ top: 0, left: 0 });
    });

    it('should return position according to the preferred position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 200,
                    y: 200,
                },
                leftBottomAnchor: {
                    x: 200,
                    y: 200,
                },
                rightUpAnchor: {
                    x: 200,
                    y: 200,
                },
                rightBottomAnchor: {
                    x: 200,
                    y: 200,
                },
                width: 40,
                height: 40,
            },
            viewport: {
                width: 400,
                height: 400,
            },
            content: {
                height: 100,
                width: 100,
            },
        };

        const { trigger, content, viewport } = param;
        const margin = 12;
        const expectedPositions = {
            top: {
                bottom: viewport.height - trigger.leftUpAnchor.y + margin,
                left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2,
            },
            bottom: {
                top: trigger.leftBottomAnchor.y + margin,
                left: trigger.rightBottomAnchor.x - content.width / 2 - trigger.width / 2,
            },
            left: {
                top: trigger.rightUpAnchor.y + trigger.height / 2 - content.height / 2,
                left: trigger.leftUpAnchor.x - margin - content.width,
            },
            right: {
                top: trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2,
                left: trigger.rightUpAnchor.x + margin,
            },
        };
        Object.keys(expectedPositions).forEach(position => {
            expect(tooltipPositionResolver(param, position)).toEqual(expectedPositions[position]);
        });
    });
});
