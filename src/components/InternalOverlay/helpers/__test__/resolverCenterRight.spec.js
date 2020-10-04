/* eslint-disable id-length */
import resolverCenterRight from '../resolverCenterRight';

describe('resolverCenterRight', () => {
    it('should return the correct centerRight position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 939,
                    y: 175,
                },
                leftBottomAnchor: {
                    x: 939,
                    y: 215,
                },
                rightUpAnchor: {
                    x: 979,
                    y: 175,
                },
                rightBottomAnchor: {
                    x: 979,
                    y: 215,
                },
                width: 40,
                height: 40,
            },
            viewport: {
                width: 1100,
                height: 400,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        const expected = {
            top:
                param.trigger.rightUpAnchor.y + param.trigger.height / 2 - param.content.height / 2,
            left: param.trigger.leftUpAnchor.x - param.content.width,
        };

        expect(resolverCenterRight(param)).toEqual(expected);
    });
});
