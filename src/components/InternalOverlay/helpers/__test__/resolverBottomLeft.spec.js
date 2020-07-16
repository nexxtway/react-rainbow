import resolverBottomLeft from '../resolverBottomLeft';

describe('resolverBottomLeft', () => {
    it('should return the correct bottomLeft position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 209,
                    y: 175,
                },
                leftBottomAnchor: {
                    x: 209,
                    y: 215,
                },
                rightUpAnchor: {
                    x: 249,
                    y: 175,
                },
                rightBottomAnchor: {
                    x: 249,
                    y: 215,
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
            left: param.trigger.leftBottomAnchor.x,
        };

        expect(resolverBottomLeft(param)).toEqual(expected);
    });
});
