/* eslint-disable id-length */
import resolverUpRight from '../resolverUpRight';

describe('resolverUpRight', () => {
    it('should return the correct topRight position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 939,
                    y: 658,
                },
                leftBottomAnchor: {
                    x: 939,
                    y: 698,
                },
                rightUpAnchor: {
                    x: 979,
                    y: 658,
                },
                rightBottomAnchor: {
                    x: 979,
                    y: 698,
                },
            },
            viewport: {
                width: 1100,
                height: 761,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        const expected = {
            top: param.trigger.leftUpAnchor.y - param.content.height,
            left: param.trigger.rightUpAnchor.x - param.content.width,
        };

        expect(resolverUpRight(param)).toEqual(expected);
    });
});
