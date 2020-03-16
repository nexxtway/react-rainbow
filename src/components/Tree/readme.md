##### Tree basic

```js
    const data = [
        { label: 'Node # 1' },
        { label: 'Node # 2' },
        {
            label: 'Node # 3',
            isExpanded: true,
            children: [
                { label: 'Node # 3.1' },
                { 
                    label: 'Node # 3.2',
                    children: [
                        { label: 'Node # 3.2.1' },
                    ]
                },
            ],
        },
        {
            label: 'Node # 4',
            children: [
                { label: 'Node # 4.1' }
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
        { label: 'Node # 1', icon: <FileIcon /> },
        { label: 'Node # 2', icon: <FileIcon /> },
        { label: 'Node # 3', icon: <FileIcon /> },
        {
            label: 'Node # 4',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            children: [
                { label: 'Node # 4.1', icon: <FileIcon />  },
                { label: 'Node # 4.2', icon: <FileIcon />  },
            ],
        },
        {
            label: 'Node # 5',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            children: [
                { label: 'Node # 5.1'},
                { label: 'Node # 5.2'},
            ],
        },
        {
            label: 'Node # 6',
            icon: <FolderCloseIcon />,
            children: [
                { label: 'Node # 6.1' },
                { label: 'Node # 6.2' },
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

##### Tree with chekboxes

```js
    const data = [
        { label: 'Node # 1', icon: <FileIcon /> },
        { label: 'Node # 2', icon: <FileIcon /> },
        { label: 'Node # 3', icon: <FileIcon /> },
        {
            label: 'Node # 4',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            isChecked: false,
            children: [
                { label: 'Node # 4.1', isChecked: false },
                { label: 'Node # 4.2', isChecked: false },
            ],
        },
        {
            label: 'Node # 4',
            icon: <FolderCloseIcon />,
            isExpanded: true,
            isChecked: false,
            children: [
                { label: 'Node # 4.1', isChecked: false, icon: <FileIcon /> },
                { label: 'Node # 4.2', isChecked: false, icon: <FileIcon /> },
            ],
        },
    ];
    const initialState = { data };
    const openNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
        child.isExpanded = !child.isExpanded;
        setState({ data: state.data });
    }
    const selectNode = ({ childPath }) => {
        const child = Tree.getChild(state.data, childPath);
        child.isChecked = !child.isChecked;
        setState({ data: state.data });
    }
    <Tree
        data={state.data}
        onExpandCollapse={openNode}
        onSelect={selectNode}
        className="rainbow-m-around_xx-large"
    />
```
