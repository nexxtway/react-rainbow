import resolverCenterLeft from '../resolverCenterLeft';

describe('resolverCenterLeft', () => {
    it('should return the correct centerLeft position', () => {
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
            top: param.trigger.leftUpAnchor.y + param.trigger.height / 2 - param.content.height / 2,
            left: param.trigger.rightUpAnchor.x,
        };

        expect(resolverCenterLeft(param)).toEqual(expected);
    });
});
