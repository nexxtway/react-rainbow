##### simple Table

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'Nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'Nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
];

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
    <Table data={data} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
    </Table>
</div>
```

##### Table with sorting

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6' };
const tableContainerStyles = { height: 300 };

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

class TableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedBy: undefined,
            sortDirection: 'asc',
            data: [
                {
                    name: 'Leandro Torres',
                    company: 'Nexxtway',
                    email: 'leandro@gmail.com',
                    status: 'verified',
                    id: '1234qwerty',
                },
                {
                    name: 'Reinier',
                    company: 'Nexxtway',
                    email: 'reinier@gmail.com',
                    status: 'verified',
                    id: '1234asdfgh',
                },
                {
                    name: 'Jose Torres',
                    company: 'Google',
                    email: 'jose@gmail.com',
                    status: 'verified',
                    id: '1234zxcvbn',
                },
                {
                    name: 'Sara',
                    company: 'Nexxtway',
                    email: 'sara@gmail.com',
                    status: 'verified',
                    id: '5678qwerty',
                },
                {
                    name: 'Tahimi',
                    company: 'Nexxtway',
                    email: 'tahimi@gmail.com',
                    status: 'verified',
                    id: '5678asdfgh',
                },
                {
                    name: 'Alejandro',
                    company: 'Google',
                    email: 'alejandro@gmail.com',
                    status: 'verified',
                    id: '5678zxcvbn',
                },
                {
                    name: 'Carlos',
                    company: 'Oracle',
                    email: 'carlos@gmail.com',
                    status: 'verified',
                    id: '9012qwerty',
                },
                {
                    name: 'Luis',
                    company: 'Google',
                    email: 'luis@gmail.com',
                    status: 'verified',
                    id: '9012asdfgh',
                },
            ],
        };
        this.handleOnSort = this.handleOnSort.bind(this);
    }

    handleOnSort(event, field, nextSortDirection) {
        const { data, sortedBy, sortDirection } = this.state;

        let newData = [...data];

        const key = x => x[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((a, b) => {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
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

##### Table with Selectable Rows

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const badgeStyles = { color: '#1de9b6' };
const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
    {
        name: 'Leo',
        company: 'nexxtway',
        email: 'leo@gmail.com',
        status: 'verified',
        id: '5678zxcvbn',
    },
    {
        name: 'Tahimi Leon',
        company: 'nexxtway',
        email: 'leon@nexxtway.com',
        status: 'verified',
        id: '9012qwerty',
    },
];

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
                    data,
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
                    onRowSelection={data => console.log(data)}
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

##### Table with a limited number of Selectable Rows

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
    {
        name: 'Leo',
        company: 'nexxtway',
        email: 'leo@gmail.com',
        status: 'verified',
        id: '5678zxcvbn',
    },
    {
        name: 'Tahimi Leon',
        company: 'nexxtway',
        email: 'leon@nexxtway.com',
        status: 'verified',
        id: '9012qwerty',
    },
];

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
    <Table
        id="table-7"
        keyField="id"
        showCheckboxColumn
        data={data}
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

##### Table with Selectable Rows by radio buttons

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
];

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
    <Table
        id="table-9"
        keyField="id"
        showCheckboxColumn
        data={data}
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

##### Table with row actions

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
    {
        name: 'Carlos',
        company: 'Oracle',
        email: 'carlos@gmail.com',
        status: 'verified',
        id: '5678zxcvbn',
    },
];

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
    <Table keyField="id" data={data}>
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
        <Column type="action">
            <MenuItem label="Edit" onClick={(e, data) => console.log(`Edit ${data.name}`)} />
            <MenuItem label="Delete" onClick={(e, data) => console.log(`Delete ${data.name}`)} />
        </Column>
    </Table>
</div>
```

##### Table with enumerates row

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'Nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'Nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
];

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
    <Table showCheckboxColumn showRowNumberColumn rowNumberOffset={99} data={data} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
    </Table>
</div>
```

##### Table Loading

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [];

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
    <Table isLoading data={data} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
    </Table>
</div>
```

##### Table Empty

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

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

##### Table

```js
import {
    Table,
    Column,
    ButtonGroup,
    ButtonIcon,
    Badge,
    MenuItem,
    ButtonMenu,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const tableContainerStyles = { height: 300 };

const StatusBadge = ({ value }) => {
    if (value === 'verified') {
        return <Badge label={value} variant="outline-brand" />;
    }
    return <Badge label={value} variant="lightest" />;
};

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
        link: '#',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'pending',
        id: '1234asdfgh',
        link: '#',
    },
    {
        name: 'Reinier',
        company: 'nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
        link: '#',
    },
    {
        name: 'Sara',
        company: 'nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
        link: '#',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
        link: '#',
    },
    {
        name: 'Leo',
        company: 'nexxtway',
        email: 'leo@gmail.com',
        status: 'verified',
        id: '5678zxcvbn',
        link: '#',
    },
    {
        name: 'Tahimi Leon',
        company: 'nexxtway',
        email: 'leon@nexxtway.com',
        status: 'verified',
        id: '9012qwerty',
        link: '#',
    },
    {
        name: 'Alejandro',
        company: 'Google',
        email: 'alejandro@gmail.com',
        status: 'verified',
        id: '5678zdfgdf',
        link: '#',
    },
    {
        name: 'Carlos',
        company: 'Oracle',
        email: 'carlos@gmail.com',
        status: 'verified',
        id: '3434fgfgdf',
        link: '#',
    },
    {
        name: 'Luis',
        company: 'Google',
        email: 'luis@gmail.com',
        status: 'verified',
        id: '9012asdfgh',
        link: '#',
    },
];

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

const StyledLink = styled.a.attrs(props => props.theme.rainbow)`
    color: ${props => props.palette.brand.main}
    &:hover,
    &:visited,
    &:active {
        color: ${props => props.palette.brand.main};
    }
`;

const ProfileLink = ({ value, row }) => <StyledLink href={row.link}>{value}</StyledLink>;

function TableExample(props) {
    const [data, setData] = useState(props.data);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState('asc');
    const [selection, setSelection] = useState([]);

    function handleOnSort(event, field, nextSortDirection) {
        let newData = [...data];

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

    function handleOnDeleteElements() {
        const selectionIds = selection.map(x => x.id);
        const newData = data.filter(e => !selectionIds.includes(e.id));
        return setData(newData);
    }

    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader src="images/user/user3.jpg" />
            <div className="rainbow-flex rainbow-justify_spread rainbow-align_center rainbow-p-around_large">
                <div>
                    <Title>Company Members</Title>
                    <Subtitle>Total • {data.length}</Subtitle>
                </div>
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faCog} />} />
                    <ButtonMenu
                        menuAlignment="right"
                        menuSize="xx-small"
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    >
                        <MenuItem label="Delete Selection" onClick={handleOnDeleteElements} />
                    </ButtonMenu>
                </ButtonGroup>
            </div>
            <Table
                style={tableContainerStyles}
                keyField="id"
                showCheckboxColumn
                data={data}
                onRowSelection={setSelection}
                onSort={handleOnSort}
                sortDirection={sortDirection}
                sortedBy={sortedBy}
            >
                <Column header="Name" field="name" component={ProfileLink} sortable />
                <Column header="Company" field="company" sortable />
                <Column header="Email" field="email" />
                <Column header="Status" field="status" component={StatusBadge} />
                <Column type="action">
                    <MenuItem label="Edit" />
                </Column>
            </Table>
        </div>
    );
}

<TableExample data={data} />;
```

##### dinamically Table

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'Nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'Nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
];

const columnsNames = ['name', 'status', 'company', 'email'];

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
    <Table data={data} keyField="id">
        {columnsNames.map(item => {
            if (item === 'status') {
                return <Column header={item} field={item} component={StatusBadge} />;
            } else {
                return <Column header={item} field={item} />;
            }
        })}
    </Table>
</div>
```
##### data Table whit listview variant

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faEllipsisV,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

const initialData = [
    {
        task: 'fix: keyboard navigation on Tree.',
        coins: 2,
        constributor: 'yvmunayev@gmail.com',
        priority: 2,
        id: '1234qwerty',
    },
    {
        task: 'feat: implement Notification Manager',
        coins: 4,
        constributor: 'yvmunayev@gmail.com',
        priority: 2,
        id: '1234asdfgh',
    },
    {
        task: 'test: InternalDropdown.',
        coins: 2,
        constributor: 'yvmunayev@gmail.com',
        priority: 2,
        id: '1234zxcvbn',
    },
    {
        task: 'feat: implement MultiSelect.',
        coins: 8,
        constributor: 'yvmunayev@gmail.com',
        priority: 2,
        id: '5678qwerty',
    },
    {
        task: 'fix: position resolver on InternalOverlay',
        coins: 8,
        constributor: 'yvmunayev@gmail.com',
        priority: 1,
        id: '5678asdfgh',
    },
    {
        task: 'refactor: ButtonMenu component.',
        coins: 8,
        constributor: 'yvmunayev@gmail.com',
        priority: 0,
        id: '5278aswegh',
    },
];

const Container = styled.div`
    padding: 0 2rem;
`;

const StyledPriority = styled.div`
    text-transform: capitalize;
    color: #ffffff;
    text-align: center;
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

const StyledCoins = styled.div`
    text-align: center;
`;

const Coins = ({ value }) => (
    <StyledCoins>
        <FontAwesomeIcon icon={faCoins} />
        {value} coins
    </StyledCoins>
);

const Constributor = () => (
    <StyledConstributor>
        <Avatar src="images/user/user3.jpg" variant="circle" size="small" />
    </StyledConstributor>
);

const priorityMap = ['low', 'medium', 'hight'];
const Priority = ({ value }) => {
    const priority = priorityMap[value];
    return (<StyledPriority priority={priority}>{priority}</StyledPriority>);
}; 

function TableListView() {
    const [data, setData] = useState(initialData);
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

    return (
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
            <Container>
                <Table
                    data={data}
                    keyField="id"
                    variant="listview"
                    onSort={handleSort}
                    sortDirection={sortDirection}
                    sortedBy={sortedBy}
                >
                    <Column header="Task" field="task" />
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

<TableListView/>;
```
