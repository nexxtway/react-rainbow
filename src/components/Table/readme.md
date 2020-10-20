# The basic Table
##### Our table component comes off course with our rainbow styles out of the box. As you can see in the code below, in order to use the component, you have to compose the `Table` with the `Column` component.
##### Notice there is a required prop `keyfield` that indicates the name of the field in your data (rows) and contains the key value.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={DataTable} keyField="id">
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with sorting
##### The `Table` component doesn't sort your data out of the box. It will send events in a form of callbacks (onSort) with the necessary info you need to perform sorting. Changes in the data will make the table re-render.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };
const tableContainerStyles = { height: 300 };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

class TableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedBy: undefined,
            sortDirection: 'asc',
            data: DataTable,
        };
        this.handleOnSort = this.handleOnSort.bind(this);
    }

    handleOnSort(event, field, nextSortDirection) {
        const { data } = this.state;

        const newData = [...data];

        const key = value => value[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((aItem, bItem) => {
            const aValue = key(aItem);
            const bValue = key(bItem);
            return reverse * ((aValue > bValue) - (bValue > aValue));
        });

        this.setState({ data: sortedData, sortedBy: field, sortDirection: nextSortDirection });
    }

    render() {
        const { data, sortDirection, sortedBy } = this.state;
        return (
            <div className="rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                    <ButtonGroup className="rainbow-m-right_medium">
                        <ButtonIcon
                            variant="border-filled"
                            disabled
                            icon={<FontAwesomeIcon icon={faCog} />}
                        />
                        <ButtonIcon
                            variant="border-filled"
                            disabled
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                        />
                    </ButtonGroup>
                </GlobalHeader>
                <div style={tableContainerStyles}>
                    <Table
                        keyField="id"
                        data={data}
                        onSort={this.handleOnSort}
                        sortDirection={sortDirection}
                        sortedBy={sortedBy}
                    >
                        <Column header="Name" field="name" sortable />
                        <Column header="Status" field="status" component={StatusBadge} />
                        <Column header="Company" field="company" />
                        <Column header="Email" field="email" sortable />
                    </Table>
                </div>
            </div>
        );
    }
}

    <TableExample />;
```

# Table with selectable rows
##### The `showCheckboxColumn` at the `Table` component level will add an extra column in the table with checkboxes, or radio buttons that will allow you to do multiple or single selection on rows. Events will be trigger on every selection via `onRowSelection`.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };
const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;


class TableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(
            () =>
                this.setState({
                    isLoading: false,
                    data:DataTable,
                }),
            2000,
        );
    }

    render() {
        const { data, isLoading } = this.state;
        return (
            <div className="rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                    <ButtonGroup className="rainbow-m-right_medium">
                        <ButtonIcon
                            variant="border-filled"
                            disabled
                            icon={<FontAwesomeIcon icon={faCog} />}
                        />
                        <ButtonIcon
                            variant="border-filled"
                            disabled
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                        />
                    </ButtonGroup>
                </GlobalHeader>
                <Table
                    id="table-5"
                    keyField="id"
                    showCheckboxColumn
                    isLoading={isLoading}
                    data={data}
                    onRowSelection={selection => console.log(selection)}
                >
                    <Column header="Name" field="name" />
                    <Column header="Status" field="status" component={StatusBadge} />
                    <Column header="Company" field="company" />
                    <Column header="Email" field="email" />
                </Table>
            </div>
        );
    }
}

    <TableExample />;
```

# Table with a limited number of selectable rows
##### Adding limits to the number of rows that you can select is possible by using `maxRowSelection` prop. Notice if the value is `1` the table will render radio buttons instead of checkboxes.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table
            id="table-7"
            keyField="id"
            showCheckboxColumn
            data={DataTable}
            maxRowSelection={4}
            selectedRows={['1234qwerty', '1234zxcvbn']}
            onRowSelection={data => console.log(data)}
        >
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with selectable rows `maxRowSelection={1}`
##### The use case of allowing a single selection will render radio buttons.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table
            id="table-9"
            keyField="id"
            showCheckboxColumn
            data={DataTable}
            maxRowSelection={1}
            onRowSelection={data => console.log(data)}
        >
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with row actions
##### Performing action per row is a common use case. There is a `Column` type= "action" that will allow you to pass `MenuItem` in the body. It will render a ButtonMenu with those actions per row, so you can easily add the implementation for every item in the menu.
##### Notice this feature will provide the same actions for every row. If your use case needs dynamic actions based on the row data then you have to create your own custom column component.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table keyField="id" data={DataTable}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
            <Column type="action">
                <MenuItem label="Edit" onClick={(event, data) => console.log(`Edit ${data.name}`)} />
                <MenuItem label="Delete" onClick={(event, data) => console.log(`Delete ${data.name}`)} />
            </Column>
        </Table>
    </div>
```

# Table with dynamic row actions
##### Sometimes your use case on row actions is more complex because the action allowed per row is based on the row data. For instance, you might not want to delete `verified` users. This type of use case is possible by providing a custom component that implements that logic within. Notice the `component` prop in `Column` is expecting a Class or Functional component. The table will instantiate the component passing "value", "row" as props.

```js
import React from 'react';
import { Table, Column, ButtonMenu, ButtonGroup, ButtonIcon, Badge, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const StatusBadge = ({ value }) => {
    if (value === 'verified') {
        return <Badge label={value} variant="outline-brand" className="rainbow-m-left_small" />;
    }
    return <Badge label={value} variant="lightest" className="rainbow-m-left_small" />;
};

const MenuAction = ({ value,name }) => {
    if(value === 'verified'){
        return  <MenuItem label="Delete" />
    }
    return (
        <>
            <MenuItem label="Delete" onClick={() => console.log(`Delete ${name}`)}/>
            <MenuItem label="Edit" onClick={() => console.log(`Edit ${name}`)}/>
        </>
    );
};

const ButtonAction = props => {
    const { value, row:{ name } }=props;
    return (
        <ButtonMenu
            id="button-menu-2"
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faEllipsisV} />}
            buttonVariant="base"
            className="rainbow-m-left_xx-small"
        >
            <MenuAction value={value} name={name}/>
        </ButtonMenu>
    );

}

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table keyField="id" data={DynamicDataTable}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
            <Column field="status" component={ButtonAction} width={60}/>
        </Table>
    </div>
```

# Table with enumerates row
##### You can add a column with enumerated rows by using `showRowNumberColumn`.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table showCheckboxColumn showRowNumberColumn rowNumberOffset={99} data={DataTable} keyField="id">
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with loading state
##### The loading state is build-in in the table. Use `isLoading` prop.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const data = [];

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table isLoading data={data} keyField="id">
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table empty state
##### The empty state is build-in in the table. It will render when data is an empty array and is not loading.
```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const tableContainerStyles = { height: 300 };

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table style={tableContainerStyles} keyField="id">
            <Column header="Name" field="name" />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with wrap text
##### By default, the content of every cell is rendered in a single line. Wrapping text is possible by providing your own custom column component.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h1.attrs(props => props.theme.rainbow)`
    font-family: 'Lato Light';
    font-size: 25px;
    text-align: left;
    margin-bottom: 10px;
    color: ${props => props.palette.text.main};
`;

const Subtitle = styled.h3.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 14px;
    color: ${props => props.palette.text.title};
`;

function CustomAction(props) {
    const { row, onDeleteElement } = props;

    return (
        <ButtonIcon
            onClick={() => onDeleteElement(row.id)}
            buttonSize="small"
            icon={<FontAwesomeIcon icon={faTrashAlt} />}
        />
    );
}

const WrapDescription = styled.p`
    overflow-wrap: break-word;
    white-space: normal;
    line-height: 20px;
    margin: 4px 0.5rem;
`;

function TableCustomAction() {
    const [data, setData] = useState(ActionsDataTable);

    function handleDeleteElement(id) {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    }

    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader src="images/user/user3.jpg">
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faPlus} />}
                    />
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    />
                </ButtonGroup>
            </GlobalHeader>
            <div className="rainbow-p-around_large">
                <Title>Members</Title>
                <Subtitle>Total • {data.length}</Subtitle>
            </div>
            <Table keyField="id" data={data} minColumnWidth="220">
                <Column defaultWidth={250} header="Name" field="name" />
                <Column
                    header="Description"
                    field="description"
                    component={({ value }) => <WrapDescription>{value}</WrapDescription>}
                />
                <Column
                    width={60}
                    component={({ row }) => (
                        <CustomAction row={row} onDeleteElement={handleDeleteElement} />
                    )}
                />
            </Table>
        </div>
    );
}
    <TableCustomAction />;
```

# Table with dynamic columns
##### Creating a column dynamically is possible by iterating in the body of the table.
```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const columnsNames = ['name', 'status', 'company', 'email'];

const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={DataTable} keyField="id">
            {columnsNames.map(item => {
            if (item === 'status') {
                return <Column header={item} field={item} component={StatusBadge} />;
            }
                return <Column header={item} field={item} />;

        })}
        </Table>
    </div>
```

# Table variant "listview"
##### The `listview` variant is just a different presentation of the table, as you can see in the following example.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    padding: 0 2rem;
`;

const StyledTaskHeader = styled.span`
    text-transform: uppercase;
`;

const StyledPriority = styled.div`
    text-transform: capitalize;
    color: #ffffff;

    ${props =>
        props.priority === 'hight' &&
        `
            background-color: #fc5e5f;
        `};
    ${props =>
        props.priority === 'medium' &&
        `
            background-color: #fc9c44;
        `};
    ${props =>
        props.priority === 'low' &&
        `
            background-color: #ffd86a;
        `};
`;

const StyledConstributor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

const StyledTask = styled.div`
    text-align: left;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const StyleCoin = styled(Coin)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;

const Task = ({ value }) => <StyledTask>{value}</StyledTask>;

const Coins = ({ value }) => (
    <>
        <StyleCoin />
        {value} coins
    </>
);

const Constributor = () => (
    <StyledConstributor>
        <Avatar src="images/user/user3.jpg" variant="circle" size="small" />
    </StyledConstributor>
);

const priorityMap = ['low', 'medium', 'hight'];
const Priority = ({ value }) => {
    const priority = priorityMap[value];
    return <StyledPriority priority={priority}>{priority}</StyledPriority>;
};

function TableListView() {
    const [data, setData] = useState(ListviewDataTable);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState('asc');

    function handleSort(event, field, nextSortDirection) {
        const newData = [...data];
        const key = value => value[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((aItem, bItem) => {
            const aValue = key(aItem);
            const bValue = key(bItem);
            return reverse * ((aValue > bValue) - (bValue > aValue));
        });

        setData(sortedData);
        setSortedBy(field);
        setSortDirection(nextSortDirection);
    }

    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faCog} />}
                    />
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    />
                </ButtonGroup>
            </GlobalHeader>
            <Container>
                <Table
                    data={data}
                    keyField="id"
                    variant="listview"
                    onSort={handleSort}
                    sortDirection={sortDirection}
                    sortedBy={sortedBy}
                >
                    <Column
                        header={<StyledTaskHeader>Task</StyledTaskHeader>}
                        field="task"
                        component={Task}
                    />
                    <Column header="Coins" field="coins" component={Coins} defaultWidth={120} />
                    <Column
                        header="Constributor"
                        field="constributor"
                        component={Constributor}
                        defaultWidth={180}
                        sortable
                    />
                    <Column
                        header={<StyledTaskHeader>Task</StyledTaskHeader>}
                        field="task"
                        component={Task}
                    />
                    <Column
                        header="Priority"
                        field="priority"
                        component={Priority}
                        defaultWidth={200}
                        sortable
                    />
                </Table>
            </Container>
        </div>
    );
}

    <TableListView />;
```

# Table "listview" variant, selectable and enumerated rows.
##### The following example shows a version of the `listview` variant, where rows can be selectable and enumerated.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    padding: 0 2rem;
`;

const StyledTaskHeader = styled.span`
    text-transform: uppercase;
`;

const StyledPriority = styled.div`
    text-transform: capitalize;
    color: #ffffff;
    ${props =>
        props.priority === 'hight' &&
        `
            background-color: #fc5e5f;
        `};
    ${props =>
        props.priority === 'medium' &&
        `
            background-color: #fc9c44;
        `};
    ${props =>
        props.priority === 'low' &&
        `
            background-color: #ffd86a;
        `};
`;

const StyledConstributor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

const StyledTask = styled.div`
    text-align: left;
    padding-left: 10px;
`;

const StyleCoin = styled(Coin)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;

const Task = ({ value }) => <StyledTask>{value}</StyledTask>;

const Coins = ({ value }) => (
    <>
        <StyleCoin />
        {value} coins
    </>
);

const Constributor = () => (
    <StyledConstributor>
        <Avatar src="images/user/user3.jpg" variant="circle" size="small" />
    </StyledConstributor>
);

const priorityMap = ['low', 'medium', 'hight'];
const Priority = ({ value }) => {
    const priority = priorityMap[value];
    return <StyledPriority priority={priority}>{priority}</StyledPriority>;
};

function TableListView() {
    const [data, setData] = useState(ListviewDataTable);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState('asc');

    function handleSort(event, field, nextSortDirection) {
        const newData = [...data];
        const key = value => value[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((aItem, bItem) => {
            const aValue = key(aItem);
            const bValue = key(bItem);
            return reverse * ((aValue > bValue) - (bValue > aValue));
        });

        setData(sortedData);
        setSortedBy(field);
        setSortDirection(nextSortDirection);
    }

    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faCog} />}
                    />
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    />
                </ButtonGroup>
            </GlobalHeader>
            <Container>
                <Table
                    data={data}
                    keyField="id"
                    variant="listview"
                    onSort={handleSort}
                    sortDirection={sortDirection}
                    sortedBy={sortedBy}
                    showCheckboxColumn
                    showRowNumberColumn
                >
                    <Column
                        header={<StyledTaskHeader>Task</StyledTaskHeader>}
                        field="task"
                        component={Task}
                    />
                    <Column header="Coins" field="coins" component={Coins} defaultWidth={120} />
                    <Column
                        header="Constributor"
                        field="constributor"
                        component={Constributor}
                        defaultWidth={180}
                        sortable
                    />
                    <Column
                        header="Priority"
                        field="priority"
                        component={Priority}
                        defaultWidth={200}
                        sortable
                    />
                </Table>
            </Container>
        </div>
    );
}

    <TableListView />;
```

# Table with hidden header
##### Hiding the header of the table is possible by using `hideTableHeader`.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6' };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon
                    variant="border-filled"
                    disabled
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={DataTable} hideTableHeader keyField="id">
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Table with inline editable columns
##### This example shows a table whose first and last columns are editable. You can inline editing the information of the columns by adding `isEditable` prop.
```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    padding: 0 2rem;
`;

const StyledPriority = styled.div`
    text-transform: capitalize;
    color: #ffffff;

    ${props =>
        props.priority === 'hight' &&
        `
            background-color: #fc5e5f;
        `};
    ${props =>
        props.priority === 'medium' &&
        `
            background-color: #fc9c44;
        `};
    ${props =>
        props.priority === 'low' &&
        `
            background-color: #ffd86a;
        `};
`;

const StyledConstributor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

const StyledTask = styled.div`
    text-align: left;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const StyleCoin = styled(Coin)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;

const Task = ({ value }) => <StyledTask>{value}</StyledTask>;

const Coins = ({ value }) => (
    <>
        <StyleCoin />
        {value} coins
    </>
);

const Constributor = () => (
    <StyledConstributor>
        <Avatar src="images/user/user3.jpg" variant="circle" size="small" />
    </StyledConstributor>
);

const priorityMap = ['low', 'medium', 'hight'];
const Priority = ({ value, isEditable }) => {
    const priority = priorityMap[value];
    return <StyledPriority priority={priority}>{priority}</StyledPriority>;
};

function TableListView() {
    const [data, setData] = useState(ListviewDataTable);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState('asc');

    function handleSort(event, field, nextSortDirection) {
        const newData = [...data];
        const key = x => x[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((a, b) => {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        });

        setData(sortedData);
        setSortedBy(field);
        setSortDirection(nextSortDirection);
    }

    const handleTaskOnChange = (value, row) =>{
        const index = data.findIndex(item=>item.id === row.id)
        const newData = [...data];
        newData[index].task = value;
        setData(newData);
    }

    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faCog} />}
                    />
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    />
                </ButtonGroup>
            </GlobalHeader>
            <Container>
                <Table
                    data={data}
                    keyField="id"
                    variant="listview"
                    onSort={handleSort}
                    sortDirection={sortDirection}
                    sortedBy={sortedBy}
                >
                    <Column
                        header="Task"
                        field="task"
                        isEditable
                        onChange={handleTaskOnChange}
                    />
                    <Column header="Coins" field="coins" component={Coins} defaultWidth={120} />
                    <Column
                        header="Constributor"
                        field="constributor"
                        component={Constributor}
                        defaultWidth={100}
                    />
                    <Column
                        header="Priority"
                        field="priority"
                        component={Priority}
                        defaultWidth={200}
                        sortable
                    />
                </Table>
            </Container>
        </div>
    );
}

<TableListView />;
```