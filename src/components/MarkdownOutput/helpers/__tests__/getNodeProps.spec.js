import getNodeProps from '../getNodeProps';

const key = 'node-key';

describe('getNodeProps', () => {
    it('should return right props when node type is root', () => {
        expect(
            getNodeProps(
                {
                    type: 'root',
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({ key });
        expect(
            getNodeProps(
                {
                    type: 'root',
                },
                key,
                {},
                '',
                {},
                0,
            ),
        ).toEqual({ key });
    });
    it('should return right props when node type is definition', () => {
        expect(
            getNodeProps(
                {
                    type: 'definition',
                    identifier: null,
                    title: 'title',
                    url: 'url',
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            identifier: null,
            title: 'title',
            url: 'url',
        });
    });
    it('should return right props when node type is text', () => {
        expect(
            getNodeProps(
                {
                    type: 'text',
                    value: 'Text',
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            nodeKey: key,
            children: 'Text',
            value: 'Text',
        });
    });
    it('should return right props when node type is heading', () => {
        [1, 2, 3, 4, 5, 6].forEach(level => {
            expect(
                getNodeProps(
                    {
                        type: 'heading',
                        depth: level,
                    },
                    key,
                    {},
                    {},
                    {},
                    0,
                ),
            ).toEqual({
                key,
                level,
            });
        });
    });
    it('should return right props when node type is list', () => {
        expect(
            getNodeProps(
                {
                    type: 'list',
                    start: 1,
                    ordered: false,
                    loose: false,
                    depth: 1,
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            start: 1,
            isOrdered: false,
            tight: true,
            depth: 1,
        });
    });
    it('should return right props when node type is listItem', () => {
        expect(
            getNodeProps(
                {
                    type: 'listItem',
                    ordered: false,
                    index: 1,
                },
                key,
                {},
                {},
                {
                    node: {
                        type: 'list',
                        start: 1,
                        ordered: false,
                        loose: false,
                        depth: 1,
                    },
                },
                0,
            ),
        ).toEqual({
            key,
            isOrdered: false,
            isChecked: undefined,
            tight: true,
            index: 1,
        });
    });
    it('should return right props when node type is code or inlineCode', () => {
        const nodes = [{ type: 'code', lang: 'js' }, { type: 'inlineCode', value: 'code' }];

        const props = [{ language: 'js' }, { children: 'code', inline: true, value: 'code' }];

        nodes.forEach((node, index) => {
            expect(getNodeProps(node, key, {}, {}, {}, 0)).toEqual({
                key,
                ...props[index],
            });
        });
    });
    it('should return right props when node type is link', () => {
        const props = [
            {},
            {
                target: '_blank',
                rel: 'noopener noreferrer',
            },
            {
                href: 'http://domain.com/modified',
            },
        ];

        const optionsList = [
            {},
            { linkTarget: '_blank' },
            { transformLinkUri: jest.fn(url => `${url}/modified`) },
        ];

        optionsList.forEach((options, index) => {
            expect(
                getNodeProps(
                    {
                        type: 'link',
                        title: 'the link title',
                        url: 'http://domain.com',
                        children: 'The link text',
                    },
                    key,
                    options,
                    {},
                    {},
                    0,
                ),
            ).toEqual({
                key,
                title: 'the link title',
                href: 'http://domain.com',
                ...props[index],
            });
        });
    });
    it('should return right props when node type is image', () => {
        const props = [
            {},
            {
                src: 'https://domain.com/image.png',
            },
        ];

        const optionsList = [
            {},
            { transformImageUri: jest.fn(() => `https://domain.com/image.png`) },
        ];

        optionsList.forEach((options, index) => {
            expect(
                getNodeProps(
                    {
                        type: 'image',
                        alt: 'the image alt text',
                        title: 'The image text',
                        url: 'http://domain.com/image.jpg',
                    },
                    key,
                    options,
                    {},
                    {},
                    0,
                ),
            ).toEqual({
                key,
                alt: 'the image alt text',
                title: 'The image text',
                src: 'http://domain.com/image.jpg',
                ...props[index],
            });
        });
    });
    it('should return right props when node type is linkReference', () => {
        const linkDefinition = {
            type: 'definition',
            identifier: 'link1',
            label: 'link1',
            title: 'the link title',
            children: 'The link text',
            url: 'http://domain.com',
            href: 'http://domain.com',
        };

        const props = [
            {},
            {
                href: 'http://domain.com/modified',
            },
        ];

        const optionsList = [
            {
                definitions: {
                    link1: linkDefinition,
                },
            },
            {
                definitions: {
                    link1: linkDefinition,
                },
                transformLinkUri: jest.fn(url => `${url}/modified`),
            },
        ];

        optionsList.forEach((options, index) => {
            expect(
                getNodeProps(
                    {
                        type: 'linkReference',
                        identifier: 'link1',
                    },
                    key,
                    options,
                    {},
                    {},
                    0,
                ),
            ).toEqual({
                key,
                ...linkDefinition,
                ...props[index],
            });
        });
    });
    it('should return right props when node type is imageReference', () => {
        expect(
            getNodeProps(
                {
                    type: 'imageReference',
                    identifier: 'image1',
                },
                key,
                {
                    definitions: {
                        image1: {
                            type: 'definition',
                            identifier: 'image1',
                            label: 'image1',
                            title: 'Image Title',
                            url: 'http://localhost:6060/0b7340ef91b62a1c44f9193ea2fdbe53.svg',
                            href: 'http://localhost:6060/0b7340ef91b62a1c44f9193ea2fdbe53.svg',
                        },
                    },
                },
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            id: 'image1',
            src: 'http://localhost:6060/0b7340ef91b62a1c44f9193ea2fdbe53.svg',
            title: 'Image Title',
        });
    });
    it('should return right props when node type is table, tableHead or tableBody', () => {
        const nodes = [
            { type: 'table' },
            { type: 'tableHead', align: ['left', 'right'] },
            { type: 'tableBody', align: [null, null] },
        ];

        const results = [
            { key },
            { key, columnAlignment: ['left', 'right'] },
            { key, columnAlignment: [null, null] },
        ];

        nodes.forEach((node, index) => {
            expect(getNodeProps(node, key, {}, {}, {}, 0)).toEqual(results[index]);
        });
    });
    it('should return right props when node type is tableRow', () => {
        const parentNodes = [
            {
                node: {
                    type: 'tableHead',
                },
                props: {
                    columnAlignment: ['left', 'right'],
                },
            },
            {
                node: {
                    type: 'tableBody',
                },
                props: {
                    columnAlignment: [null, null],
                },
            },
        ];
        const results = [
            { key, isHeader: true, columnAlignment: ['left', 'right'] },
            { key, isHeader: false, columnAlignment: [null, null] },
        ];

        parentNodes.forEach((parent, index) => {
            expect(
                getNodeProps(
                    {
                        type: 'tableRow',
                    },
                    key,
                    {},
                    {},
                    parent,
                    0,
                ),
            ).toEqual(results[index]);
        });
    });
    it('should return right props when node type is tableCell', () => {
        const parentNodes = [
            {
                props: {
                    isHeader: true,
                    columnAlignment: ['left', 'right'],
                },
            },
            {
                props: {
                    isHeader: false,
                    columnAlignment: [null, null],
                },
            },
        ];
        const results = [
            [{ key, isHeader: true, align: 'left' }, { key, isHeader: true, align: 'right' }],
            [{ key, isHeader: false, align: null }, { key, isHeader: false, align: null }],
        ];

        parentNodes.forEach((parent, parentIndx) => {
            [0, 1].forEach(nodeIndx => {
                expect(
                    getNodeProps(
                        {
                            type: 'tableCell',
                        },
                        key,
                        {},
                        {},
                        parent,
                        nodeIndx,
                    ),
                ).toEqual(results[parentIndx][nodeIndx]);
            });
        });
    });
    it('should return right props when node type is virtualHtml', () => {
        expect(
            getNodeProps(
                {
                    type: 'virtualHtml',
                    tag: 'strong',
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            tag: 'strong',
        });
    });
    it('should return right props when node type is something else', () => {
        expect(
            getNodeProps(
                {
                    type: 'anything',
                },
                key,
                {},
                {},
                {},
                0,
            ),
        ).toEqual({
            key,
            type: undefined,
            position: undefined,
            children: undefined,
        });
    });
});
