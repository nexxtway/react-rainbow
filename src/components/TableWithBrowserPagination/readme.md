##### A table with pagination made in the client side:

```js
import React from 'react';
import { Table, Column, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    color: #1de9b6;
`;
const StatusBadge = ({ value }) => <StyledBadge label={value} variant="lightest" />;

<div className="rainbow-m-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <TableWithBrowserPagination pageSize={5} data={Users} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
        <Column header="Date of Birth" field="dob" />
        <Column header="City" field="city" />
    </TableWithBrowserPagination>
</div>
```

##### A table with fixed height and pagination made in the client side:

```js
import React from 'react';
import { Table, Column, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    color: #1de9b6;
`;
const StatusBadge = ({ value }) => <StyledBadge label={value} variant="lightest" />;
const containerStyles = { height: 312 };
const containerTableStyles = { height: 256 };

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />

    <div style={containerStyles}>
        <TableWithBrowserPagination
            pageSize={10}
            data={Users}
            keyField="id"
            style={containerTableStyles}
        >
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
            <Column header="Date of Birth" field="dob" />
            <Column header="City" field="city" />
        </TableWithBrowserPagination>
    </div>
</div>
```

##### A table with pagination aling to the right made in the client side:

```js
import React from 'react';
import { Table, Column, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    color: #1de9b6;
`;
const StatusBadge = ({ value }) => <StyledBadge label={value} variant="lightest" />;

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={Users} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
        <Column header="Date of Birth" field="dob" />
        <Column header="City" field="city" />
    </TableWithBrowserPagination>
</div>
```

##### A table with pagination aling to the left made in the client side:

```js
import React from 'react';
import { Table, Column, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    color: #1de9b6;
`;
const StatusBadge = ({ value }) => <StyledBadge label={value} variant="lightest" />;

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <TableWithBrowserPagination paginationAlignment="left" pageSize={5} data={Users} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Status" field="status" component={StatusBadge} />
        <Column header="Company" field="company" />
        <Column header="Email" field="email" />
        <Column header="Date of Birth" field="dob" />
        <Column header="City" field="city" />
    </TableWithBrowserPagination>
</div>
```
