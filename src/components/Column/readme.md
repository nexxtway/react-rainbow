##### simple Column

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

##### Column with fix width and defaultWidth

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
