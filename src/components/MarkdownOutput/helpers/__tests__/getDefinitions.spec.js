import getDefinitions from '../getDefinitions';

describe('getDefinitions', () => {
    it('should return array with definitions', () => {
        const nodes = {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            value:
                                'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a ',
                            position: {
                                start: { line: 1, column: 1, offset: 0 },
                                end: { line: 1, column: 212, offset: 211 },
                                indent: [],
                            },
                        },
                        {
                            type: 'linkReference',
                            identifier: '2',
                            label: '2',
                            referenceType: 'full',
                            children: [
                                {
                                    type: 'text',
                                    value: 'hobbit-hole',
                                    position: {
                                        start: { line: 1, column: 213, offset: 212 },
                                        end: { line: 1, column: 224, offset: 223 },
                                        indent: [],
                                    },
                                },
                            ],
                            position: {
                                start: { line: 1, column: 212, offset: 211 },
                                end: { line: 1, column: 228, offset: 227 },
                                indent: [],
                            },
                        },
                        {
                            type: 'text',
                            value: ', and that means comfort.',
                            position: {
                                start: { line: 1, column: 228, offset: 227 },
                                end: { line: 1, column: 253, offset: 252 },
                                indent: [],
                            },
                        },
                    ],
                    position: {
                        start: { line: 1, column: 1, offset: 0 },
                        end: { line: 1, column: 253, offset: 252 },
                        indent: [],
                    },
                },
                {
                    type: 'definition',
                    identifier: '1',
                    label: '1',
                    title: 'Image Title',
                    url: '/image.svg',
                    position: {
                        start: { line: 3, column: 1, offset: 254 },
                        end: { line: 3, column: 30, offset: 283 },
                        indent: [],
                    },
                },
                {
                    type: 'definition',
                    identifier: '2',
                    label: '2',
                    title: 'Hobbit lifestyles',
                    url: 'https://en.wikipedia.org/wiki/Hobbit#Lifestyle',
                    position: {
                        start: { line: 4, column: 1, offset: 284 },
                        end: { line: 4, column: 74, offset: 357 },
                        indent: [],
                    },
                },
            ],
            position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 4, column: 74, offset: 357 },
            },
        };
        const definitions = {
            '1': { href: '/image.svg', title: 'Image Title' },
            '2': {
                href: 'https://en.wikipedia.org/wiki/Hobbit#Lifestyle',
                title: 'Hobbit lifestyles',
            },
        };

        expect(getDefinitions(nodes)).toEqual(definitions);
    });
});
