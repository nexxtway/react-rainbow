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
            <Column header="Name" field="name" headerAlignment="center" />
            <Column header="Status" field="status" component={StatusBadge} headerAlignment="center" />
            <Column header="Company" field="company" headerAlignment="center" />
            <Column header="Email" field="email" headerAlignment="center" />
        </Table>
    </div>
```
