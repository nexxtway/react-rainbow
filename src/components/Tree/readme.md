Basic Tree component
    
    const data = [
        { 
            label: 'Node # 1',
            isExpanded: true,
            isChecked: false,
            children: [
                { label: 'Node # 1.1' },
                { label: 'Node # 1.2' },
            ],
        },
        { label: 'Node # 2' },
        { 
            label: 'Node # 3',
            children: [],
        }
    ]; 
    <Tree 
        data={data}
        onExpandCollapse={() => alert('OK')}
    />