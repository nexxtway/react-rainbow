# The basic Column
##### This example shows a simple performance of a column that belongs to a table.You can name each column using the `header` prop, and just by passing the `field` prop the data of this field will be displayed.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'Nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
    },
    {
        name: 'Tahimi',
        company: 'Nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
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
        <Table data={data} keyField="name">
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
```

# Column width
##### The width of each column is the same by default. For instance, if the width of the table is 500px and it has 5 columns, then each column will have 100px approximately.  If you want to, you can modify it using the `width` prop or the `defaultWidth` prop. 
##### If you have a use case where you don't want the user to modify the column width, use the `width` prop. Instead, if what you want is that the user can modify the column width, use the `defaultWidth` prop.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        birthday: '05/12/1990',
        name: 'Leandro Torres',
        location: 'Londres',
        email: 'leandro@gmail.com',
        status: 'online',
    },
    {
        birthday: '10/18/1989',
        name: 'Jose Torres',
        location: 'Paris',
        email: 'jose@gmail.com',
        status: 'online',
    },
    {
        birthday: '01/28/1990',
        name: 'Reinier',
        location: 'Miami',
        email: 'reinier@gmail.com',
        status: 'online',
    },
    {
        birthday: '08/02/1988',
        name: 'Sara',
        location: 'Maimi',
        email: 'sara@gmail.com',
        status: 'online',
    },
    {
        birthday: '03/30/1987',
        name: 'Tahimi',
        location: 'Paris',
        email: 'tahimi@gmail.com',
        status: 'online',
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
        <Table data={data} keyField="name">
            <Column header="Birthday" field="birthday" width={130} />
            <Column header="Status" field="status" component={StatusBadge} defaultWidth={180} />
            <Column header="Name" field="name" />
            <Column header="Email" field="email" />
            <Column header="Place of birth" field="location" />
        </Table>
    </div>
```

# Column header alignment
##### It is possible to align the content of each column header using the `headerAlignment` prop. Valid values are `left` (default), `center` and `right`.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        payment: '10.00 USD',
        email: 'leandro@gmail.com',
        status: 'verified',
    },
    {
        name: 'Jose Torres',
        payment: '1.00 USD',
        email: 'jose@gmail.com',
        status: 'verified',
    },
    {
        name: 'Reinier',
        payment: '5.00 USD',
        email: 'reinier@gmail.com',
        status: 'verified',
    },
    {
        name: 'Sara',
        payment: '321.00 USD',
        email: 'sara@gmail.com',
        status: 'verified',
    },
    {
        name: 'Tahimi',
        payment: '8.00 USD',
        email: 'tahimi@gmail.com',
        status: 'verified',
    },
];

const badgeStyles = { color: '#1de9b6' };

const StatusBadge = ({ value }) => <div style={{ display: 'flex', justifyContent: 'center', marginTop: 7 }}><Badge label={value} variant="lightest" style={badgeStyles} /></div>;

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
        <Table data={data} keyField="name">
            <Column header="Name" field="name" />
            <Column header="Email" field="email" />
            <Column header="Status" field="status" component={StatusBadge} headerAlignment="center" />
            <Column header="Payment" field="payment" headerAlignment="right" cellAlignment="right" />
        </Table>
    </div>
```

# Column header alignment with `listview` variant
##### When table is variant `listview` the default column header alignment is center, but you can still provide a custom alignment.

```js
import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        payment: '10.00 USD',
        email: 'leandro@gmail.com',
        status: 'verified',
    },
    {
        name: 'Jose Torres',
        payment: '1.00 USD',
        email: 'jose@gmail.com',
        status: 'verified',
    },
    {
        name: 'Reinier',
        payment: '5.00 USD',
        email: 'reinier@gmail.com',
        status: 'verified',
    },
    {
        name: 'Sara',
        payment: '321.00 USD',
        email: 'sara@gmail.com',
        status: 'verified',
    },
    {
        name: 'Tahimi',
        payment: '8.00 USD',
        email: 'tahimi@gmail.com',
        status: 'verified',
    },
];

const badgeStyles = { color: '#1de9b6' };

const StatusBadge = ({ value }) => <div style={{ display: 'flex', justifyContent: 'center', marginTop: 7 }}><Badge label={value} variant="lightest" style={badgeStyles} /></div>;

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
        <Table data={data} keyField="name" variant="listview" className="rainbow-p-left_large rainbow-p-right_large">
            <Column header="Name" field="name" headerAlignment="left"  cellAlignment="left" />
            <Column header="Email" field="email" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Payment" field="payment" headerAlignment="right" cellAlignment="right" />
        </Table>
    </div>
```

# Column using hearderComponent
##### The `headerComponent` prop should replace the whole header interface and functionality. When this prop is passed the developer need to implement all of the functionalities given on the column for example `sort`...



```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Column, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const StyledEmptyText = styled.span`
    ${props => (props.value === 'UNKNOWN'
        ? `
            color: ${props.theme.rainbow.palette.text.header};
            font-style: italic;
        ` : `
            color: ${props.theme.rainbow.palette.text.main};
        `
    )};
`;

const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 0.5rem;
    justify-content: center;
    text-transform: capitalize;
    ${props => props.sortDirection === 'asc' && `background-color: ${props.theme.rainbow.palette.brand.main};`}
    ${props => props.sortDirection === 'desc' && `background-color: ${props.theme.rainbow.palette.success.main};`}
    ${props => !props.isSorted && 'background-color: transparent;'}
    ${props => props.isSorted &&
    `
        svg {
            visibility: visible;
        }
    `}
    :hover {
        svg {
            visibility: visible;
        }
    }
`;

const StyledArrowIcon = styled(FontAwesomeIcon)`
    visibility: hidden;
    margin-left: 12px;
`;

const EmptyCell = ({ value }) => {
    const newValue = value || 'UNKNOWN';
    return (
        <StyledEmptyText value={newValue}>
            {newValue}
        </StyledEmptyText>
    );
};

const SortBackgroundHeader = ({ onSort, header, sortDirection, isSorted }) => {
    const arrowIcon = sortDirection === 'asc' ? faArrowDown : faArrowUp;
    return (
        <StyledHeaderContainer onClick={onSort} sortDirection={sortDirection} isSorted={isSorted}>
            <span>{header}</span>
            <StyledArrowIcon icon={arrowIcon} />
        </StyledHeaderContainer>
    );
};

function TableContact() {
    // eslint-disable-next-line no-undef
    const [data, setData] = useState(ContactDataTable);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState();

    const handleSort = (event, field, nextSortDirection) => {
        const newData = [...data];
        const key = value => value[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((aItem, bItem) => {
            const aValue = new Date(key(aItem));
            const bValue = new Date(key(bItem));
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
            <Table
                data={data}
                keyField="id"
                onSort={handleSort}
                sortDirection={sortDirection}
                sortedBy={sortedBy}
                variant="listview"
                className="rainbow-p-left_large rainbow-p-right_large"
                showCheckboxColumn
            >
                <Column header="Name" field="name" />
                <Column
                    header="Created At"
                    headerComponent={SortBackgroundHeader}
                    field="createdAt"
                    defaultWidth={200}
                    sortable
                />
                <Column header="Phone Number" field="phone" />
                <Column header="lineType" field="lineType" component={EmptyCell} />
                <Column header="carrier" field="carrier" component={EmptyCell} />
                <Column header="Caller Type" field="callerType" component={EmptyCell} />
            </Table>
        </div>
    );
}

    <TableContact />;
```
