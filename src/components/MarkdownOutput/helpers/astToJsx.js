import React from 'react';
import getNodeProps from './getNodeProps';

const defaultNodePosition = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
};

export default function astToJsx(node, options, parent = {}, index = 0) {
    const renderer = options.renderers[node.type];
    const {
        start: { line, column },
    } = node.position || (parent.node && parent.node.position) || defaultNodePosition;
    const key = [node.type, line, column, index].join('-');
    const nodeProps = getNodeProps(node, key, options, renderer, parent, index);

    const resolveChildren = () => {
        return (
            node.children &&
            node.children.map((childNode, i) =>
                astToJsx(childNode, options, { node, props: nodeProps }, i),
            )
        );
    };

    return React.createElement(
        renderer,
        nodeProps,
        nodeProps.children || resolveChildren() || undefined,
    );
}
