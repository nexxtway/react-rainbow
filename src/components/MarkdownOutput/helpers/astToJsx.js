import React from 'react';
import getListItemChildren from './getListItemChildren';
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

    if (node.type === 'listItem') {
        nodeProps.children = getListItemChildren(node, parent).map((childNode, i) => {
            return astToJsx(childNode, options, { node, props: nodeProps }, i);
        });
    }

    const nodeChildren =
        nodeProps.children ||
        (node.children &&
            node.children.map((childNode, i) =>
                astToJsx(childNode, options, { node, props: nodeProps }, i),
            )) ||
        undefined;

    return React.createElement(renderer, nodeProps, nodeChildren);
}
