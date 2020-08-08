import { useCallback, useState, useMemo, useEffect } from 'react';
import {
    RIGHT_KEY,
    LEFT_KEY,
    UP_KEY,
    DOWN_KEY,
    HOME_KEY,
    END_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../libs/constants';
import getNextFocusedNode from '../helpers/getNextFocusedNode';
import getLastRootNodeName from '../helpers/getLastRootNodeName';
import isPrintableCharacter from '../helpers/isPrintableCharacter';
import findNodeByFirstLetter from '../helpers/findNodeByFirstLetter';
import finExpandableNodesAtLevel from '../helpers/finExpandableNodesAtLevel';

export default function useKeyNavigation({
    visibleNodes,
    selectedNode,
    onNodeSelect,
    onNodeExpand,
}) {
    const [focusedNode, setFocusedNode] = useState(selectedNode);
    const [enableNavKeys, setEnableNavKeys] = useState(false);

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: ({ name }) => {
                const nextFocusedNode = getNextFocusedNode(visibleNodes, name, -1);
                setFocusedNode(nextFocusedNode);
            },
            [DOWN_KEY]: ({ name }) => {
                const nextFocusedNode = getNextFocusedNode(visibleNodes, name, 1);
                setFocusedNode(nextFocusedNode);
            },
            [LEFT_KEY]: props => {
                const { name, nodePath, isExpanded, children } = props;
                if (children && isExpanded) {
                    onNodeExpand({ name, nodePath });
                } else {
                    const parentNode = name.substr(0, name.lastIndexOf('.'));
                    if (parentNode) setFocusedNode(parentNode);
                }
            },
            [RIGHT_KEY]: props => {
                const { name, nodePath, isExpanded, children } = props;
                if (children && !isExpanded) return onNodeExpand({ name, nodePath });
                return null;
            },
            [HOME_KEY]: () => {
                if (visibleNodes.length > 0) setFocusedNode('node-1');
            },
            [END_KEY]: () => {
                setFocusedNode(getLastRootNodeName(visibleNodes));
            },
            [ENTER_KEY]: props => {
                const { name, nodePath } = props;
                onNodeSelect({ name, nodePath });
            },
            [SPACE_KEY]: props => {
                const { name, nodePath, children } = props;
                if (children) onNodeExpand({ name, nodePath });
            },
        }),
        [onNodeSelect, onNodeExpand, visibleNodes],
    );

    const processPrintableCharacter = useCallback(
        char => {
            if (char === '*') {
                const currentNode = visibleNodes.find(node => node.name === focusedNode);
                if (currentNode) {
                    const expandableNodes = finExpandableNodesAtLevel(
                        visibleNodes,
                        currentNode.level,
                    );
                    expandableNodes.forEach(node => {
                        const { name, nodePath } = node;
                        onNodeExpand({ name, nodePath });
                    });
                }
            } else {
                const currentIndx = visibleNodes.findIndex(node => node.name === focusedNode);
                const nextNode = findNodeByFirstLetter(visibleNodes, char, currentIndx);
                if (nextNode) setFocusedNode(nextNode.name);
            }
        },
        [focusedNode, onNodeExpand, visibleNodes],
    );

    const keyDownHandler = useCallback(
        (event, childProps) => {
            const { key, keyCode } = event;
            if (keyHandlerMap[keyCode]) {
                event.preventDefault();
                event.stopPropagation();
                keyHandlerMap[keyCode](childProps);
            } else if (isPrintableCharacter(key)) {
                event.preventDefault();
                event.stopPropagation();
                processPrintableCharacter(key, childProps);
            }
        },
        [keyHandlerMap, processPrintableCharacter],
    );

    const setFocus = useCallback(
        (event, node) => {
            event.stopPropagation();
            setFocusedNode(node);
            setEnableNavKeys(true);
        },
        [setEnableNavKeys],
    );

    const clearFocus = useCallback(
        (event, node) => {
            event.stopPropagation();
            setEnableNavKeys(false);
            if (focusedNode === node) setFocusedNode(selectedNode);
        },
        [focusedNode, selectedNode],
    );

    useEffect(() => {
        setFocusedNode(selectedNode);
    }, [selectedNode]);

    return {
        autoFocus: enableNavKeys,
        focusedNode,
        setFocusedNode: setFocus,
        clearFocusedNode: clearFocus,
        keyDownHandler,
    };
}
