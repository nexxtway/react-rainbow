import defaultPositionResolver from '../defaultPositionResolver';

const DEFAULT_MARGIN = 5;

describe('defaultPositionResolver', () => {
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
            top: param.trigger.leftBottomAnchor.y + DEFAULT_MARGIN,
            left: param.trigger.leftBottomAnchor.x,
        };

        expect(defaultPositionResolver(param)).toEqual(expected);
    });

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
            top: param.trigger.leftBottomAnchor.y + DEFAULT_MARGIN,
            left: param.trigger.rightBottomAnchor.x - param.content.width,
        };

        expect(defaultPositionResolver(param)).toEqual(expected);
    });

    it('should return the correct topLeft position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 209,
                    y: 658,
                },
                leftBottomAnchor: {
                    x: 209,
                    y: 698,
                },
                rightUpAnchor: {
                    x: 249,
                    y: 658,
                },
                rightBottomAnchor: {
                    x: 249,
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
            top: param.trigger.leftUpAnchor.y - DEFAULT_MARGIN - param.content.height,
            left: param.trigger.leftBottomAnchor.x,
        };

        expect(defaultPositionResolver(param)).toEqual(expected);
    });

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
            top: param.trigger.leftUpAnchor.y - DEFAULT_MARGIN - param.content.height,
            left: param.trigger.rightUpAnchor.x - param.content.width,
        };

        expect(defaultPositionResolver(param)).toEqual(expected);
    });

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
        expect(defaultPositionResolver(param)).toEqual({ top: 0, left: 0 });
    });

    it.skip('should return position at 0:0 when opts param is not valid', () => {
        [undefined, null, 12, {}, () => {}].forEach(value => {
            expect(defaultPositionResolver(value)).toEqual({ top: 0, left: 0 });
        });
    });
});
