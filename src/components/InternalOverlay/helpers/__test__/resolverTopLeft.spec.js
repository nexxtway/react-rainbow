/* eslint-disable id-length */
import resolverTopLeft from '../resolverTopLeft';

describe('resolverTopLeft', () => {
    it('should return the correct topLeft position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 209,
                    y: 150,
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
                height: 380,
                width: 120,
            },
        };
        const expected = {
            top: 0,
            left: param.trigger.leftUpAnchor.x - param.content.width,
        };

        expect(resolverTopLeft(param)).toEqual(expected);
    });
});
