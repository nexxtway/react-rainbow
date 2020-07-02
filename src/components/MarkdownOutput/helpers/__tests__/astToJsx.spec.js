import ReactDOMServer from 'react-dom/server';
import astToJsx from '../astToJsx';

describe('astToJsx', () => {
    it('should return right react components structure', () => {
        const abtractSytaxTree = {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            value: 'In a hole in the ground there lived a hobbit.',
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
        const options = {
            definitions: {
                '1': { href: '/image.svg', title: 'Image Title' },
                '2': {
                    href: 'https://en.wikipedia.org/wiki/Hobbit#Lifestyle',
                    title: 'Hobbit lifestyles',
                },
            },
            renderers: {
                root: 'div',
                paragraph: 'p',
                link: 'a',
                image: 'img',
                linkReference: 'a',
                imageReference: 'img',
                text: 'span',
                definition: () => null,
            },
        };

        expect(ReactDOMServer.renderToString(astToJsx(abtractSytaxTree, options))).toBe(
            '<div data-reactroot=""><p><span nodeKey="text-1-1-0">In a hole in the ground there lived a hobbit.</span><a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles"><span nodeKey="text-1-213-0">hobbit-hole</span></a><span nodeKey="text-1-228-2">, and that means comfort.</span></p></div>',
        );
    });
});
