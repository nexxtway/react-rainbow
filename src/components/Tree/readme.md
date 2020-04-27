##### Tree basic

```js
    const data = [
        { label: 'Tree Item' },
        { label: 'Tree Item' },
        {
            label: 'Tree Branch',
            isExpanded: true,
            children: [
                { label: 'Tree Item' },
                {
                    label: 'Tree Branch',
                    isLoading: false,
                    children: [
                        { label: 'Tree Item' },
                    ]
                },
            ],
        },
        {
            label: 'Tree Branch',
            children: [
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
            ],
        }
    ];
    const initialState = { data };
    const openNode = ({ nodePath }) => {
        const child = Tree.getNode(state.data, nodePath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }
    <Tree
        id="tree-component-1"
        data={state.data}
        onExpandCollapse={openNode}
        className="rainbow-m-around_xx-large"
    />
```

##### Tree loading data when a node is expanded

```js
    const initialData = [
        { label: 'Tree Item' },
        { label: 'Tree Item' },
        {
            label: 'Tree Branch',
            isExpanded: false,
            isLoading: false,
            children: [
                { label: 'Tree Item' },
                {
                    label: 'Tree Branch',
                    isExpanded: false,
                    isLoading: false,
                    children: [
                        { label: 'Tree Item' },
                    ]
                },
            ],
        },
        {
            label: 'Tree Branch',
            isExpanded: false,
            isLoading: false,
            children: [
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
                { label: 'Tree Item' },
            ],
        }
    ];

    import React, { useState, useEffect } from 'react';

    const TreeExample = () => {
        const [data, setData] = React.useState(initialData);
        const openNode = ({ nodePath }) => {
            const child = Tree.getNode(data, nodePath);
            if(!child.isExpanded){
                child.isLoading = !child.isLoading;
                setTimeout(() => {
                    child.isLoading = !child.isLoading;
                    child.isExpanded = !child.isExpanded;
                    let newData = [...data];
                    newData[nodePath] = child;
                    setData(newData);
                }, 1000);
            }
            else {child.isExpanded = !child.isExpanded}
            let newData = [...data];
            newData[nodePath] = child;
            setData(newData);
        
        }
        return (
            <Tree
                data={data}
                onExpandCollapse={openNode}
                className="rainbow-m-around_xx-large"
            />
        );
    }

    <TreeExample />
```

##### Tree with icons

```js
    const data = [
        { label: 'Tree Item', icon: <FileIcon /> },
        { label: 'Tree Item', icon: <FileIcon /> },
        { label: 'Tree Item', icon: <FileIcon /> },
        {
            label: 'Tree Branch',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            children: [
                { label: 'Tree Item', icon: <FileIcon />  },
                { label: 'Tree Item', icon: <FileIcon />  },
            ],
        },
        {
            label: 'Tree Branch',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            children: [
                { label: 'Tree Item'},
                { label: 'Tree Item'},
            ],
        },
        {
            label: 'Tree Branch',
            isLoading: false,
            icon: <FolderCloseIcon />,
            children: [
                { label: 'Tree Item' },
                { label: 'Tree Item' },
            ],
        },
    ];
    const initialState = { data };
    const openNode = ({ nodePath }) => {
        const child = Tree.getNode(state.data, nodePath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }
    <Tree
        data={state.data}
        onExpandCollapse={openNode}
        className="rainbow-m-around_xx-large"
    />
```

##### Tree with checkboxes

```js
    const data = [
        { label: 'Tree Item',isChecked: false, icon: <FileIcon /> },
        { label: 'Tree Item',isChecked: false, icon: <FileIcon /> },
        { label: 'Tree Item',isChecked: false, icon: <FileIcon /> },
        {
            label: 'Tree Branch',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            isChecked: false,
            children: [
                { label: 'Tree Item', isChecked: false },
                { label: 'Tree Item', isChecked: false }, 
                {
                    label: 'Tree Branch',
                    icon: <FolderCloseIcon />,
                    isExpanded: true,
                    isChecked: false,
                    children: [
                        { label: 'Tree Item', isChecked: false },
                        { label: 'Tree Item', isChecked: false },
                        {
                            label: 'Tree Branch',
                            icon: <FolderCloseIcon />,
                            isExpanded: true,
                            isChecked: false,
                            children: [
                                { label: 'Tree Item', isChecked: false },
                                { label: 'Tree Item', isChecked: false },
                                { label: 'Tree Item', isChecked: false }, 
                            ],
                },
                        { label: 'Tree Item', isChecked: false }, 
                    ],
                },
                { label: 'Tree Item', isChecked: false },
                

            ],
        },
        {
            label: 'Tree Branch',
            icon: <FolderCloseIcon />,
            isLoading: false,
            isChecked: false,
            children: [
                { label: 'Tree Item', isChecked: false, icon: <FileIcon /> },
                { label: 'Tree Item', isChecked: false, icon: <FileIcon /> },
            ],
        },
    ];
    const initialState = { data };
    const openNode = ({ nodePath }) => {
        const child = Tree.getNode(state.data, nodePath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }

    function getSiblingSelectionState(parent) {
        const siblings = parent.children;
        const maxSiblingsSelection = siblings.length;
        let selected = 0;
        let indeterminate = 0;

        siblings.forEach(sibling => {
            if (sibling.isChecked === true) {
                selected += 1;
            }
            if (sibling.isChecked === 'indeterminate') {
                indeterminate += 1;
            }
        });

        if (selected === 0 && indeterminate === 0) {
            return 'none';
        }
        if (selected === maxSiblingsSelection) {
            return 'all';
        }
        return 'some';
    }

    const stateMap = { all: true, some: 'indeterminate', none: false };

    function passChildState(tree, nodePath) {
        const parent = Tree.getNode(tree, nodePath.slice(0, nodePath.length - 1));
        const siblingsState = getSiblingSelectionState(parent);
        parent.isChecked = stateMap[siblingsState];

        if (nodePath.length === 2) {
            return parent;
        }

        return passChildState(tree, nodePath.slice(0, nodePath.length - 1));
    }

    function passParentState(node) {
        const children = node.children;

        children.forEach(child => {
            child.isChecked = node.isChecked;
            if (child.children) {
                child.children = passParentState(child);
            }
        });

        return children;
    }

    const selectNode = ({ nodePath }) => {
        const node = Tree.getNode(state.data, nodePath);
        node.isChecked = !node.isChecked;

        if(nodePath.length > 1) {
            passChildState(state.data, nodePath);
        }

        if (node.children) {
            node.children = passParentState(node);
        }
        setState({ data: state.data });
    }
    <Tree
        data={state.data}
        onExpandCollapse={openNode}
        onSelect={selectNode}
        className="rainbow-m-around_xx-large"
    />
```
