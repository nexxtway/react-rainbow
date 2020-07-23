import resolverBottomCenter from '../resolverBottomCenter';

describe('resolverBottomCenter', () => {
    it('should return the correct bottomCenter position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 109,
                    y: 175,
                },
                leftBottomAnchor: {
                    x: 109,
                    y: 215,
                },
                rightUpAnchor: {
                    x: 149,
                    y: 175,
                },
                rightBottomAnchor: {
                    x: 149,
                    y: 215,
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
            top: param.trigger.leftBottomAnchor.y,
            left:
                param.trigger.rightBottomAnchor.x -
                param.content.width / 2 -
                param.trigger.width / 2,
        };

        expect(resolverBottomCenter(param)).toEqual(expected);
    });
});
