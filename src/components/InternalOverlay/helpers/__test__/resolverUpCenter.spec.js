/* eslint-disable id-length */
import resolverUpCenter from '../resolverUpCenter';

describe('resolverUpCenter', () => {
    it('should return the correct topCenter position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 109,
                    y: 658,
                },
                leftBottomAnchor: {
                    x: 109,
                    y: 698,
                },
                rightUpAnchor: {
                    x: 149,
                    y: 658,
                },
                rightBottomAnchor: {
                    x: 149,
                    y: 698,
                },
                width: 40,
                height: 40,
            },
            viewport: {
                width: 240,
                height: 761,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        const expected = {
            top: param.trigger.leftUpAnchor.y - param.content.height,
            left: param.trigger.rightUpAnchor.x - param.content.width / 2 - param.trigger.width / 2,
        };
        expect(resolverUpCenter(param)).toEqual(expected);
    });
});
