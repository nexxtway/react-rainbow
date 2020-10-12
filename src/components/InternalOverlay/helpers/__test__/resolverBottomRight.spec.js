/* eslint-disable id-length */
import resolverBottomRight from '../resolverBottomRight';

describe('resolverBottomRight', () => {
    it('should return the correct bottomRight position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 939,
                    y: 375,
                },
                leftBottomAnchor: {
                    x: 939,
                    y: 415,
                },
                rightUpAnchor: {
                    x: 979,
                    y: 375,
                },
                rightBottomAnchor: {
                    x: 979,
                    y: 415,
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
            top: param.trigger.leftBottomAnchor.y,
            left: param.trigger.rightBottomAnchor.x - param.content.width,
        };

        expect(resolverBottomRight(param)).toEqual(expected);
    });
});
