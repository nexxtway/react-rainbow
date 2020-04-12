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
                    isLoading: true,
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
    const openNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }
    <Tree
        data={state.data}
        onExpandCollapse={openNode}
        className="rainbow-m-around_xx-large"
    />
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
            isLoading: true,
            icon: <FolderCloseIcon />,
            children: [
                { label: 'Tree Item' },
                { label: 'Tree Item' },
            ],
        },
    ];
    const initialState = { data };
    const openNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
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
                { label: 'Tree Item', isChecked: false },

            ],
        },
        {
            label: 'Tree Branch',
            icon: <FolderCloseIcon />,
            isLoading: true,
            isChecked: false,
            children: [
                { label: 'Tree Item', isChecked: false, icon: <FileIcon /> },
                { label: 'Tree Item', isChecked: false, icon: <FileIcon /> },
            ],
        },
    ];
    const initialState = { data };
    const stateMap = { all: true, some: 'indeterminate', none: false };
    const openNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }
    const selectNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
        child.isChecked = !child.isChecked;
        if(childPath.length > 1) {           
            const parent = Tree.getParent(state.data, childPath);
            const brothersState = Tree.getBrothersState(parent);
            parent.isChecked = stateMap[brothersState];
        }
        if (child.children) {
            child.children = Tree.passParentState(child);
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
