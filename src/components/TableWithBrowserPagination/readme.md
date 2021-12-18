# The basic TableWithBrowserPagination
##### This example represents a table with client-side pagination. It allows you to split huge amounts
##### of data within your table into smaller subsets that can be easily navigated.

```js
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
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

# TableWithBrowserPagination with fixed height
##### In this example, the table with client-side pagination appears with fixed height.

```js
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
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

# TableWithBrowserPagination with right alignment
##### In this case, the table with client-side pagination is aligned to the right.

```js
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
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

# TableWithBrowserPagination with left alignment
##### In this case, the table with client-side pagination is aligned to the left.

```js
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
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

# TableWithBrowserPagination shaded and with “listview” variant
##### The following example shows the pagination with a shadow around it, and a different presentation of the table with the “listview” variant.

```js
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    color: #1de9b6;
`;

const StyledContainer = styled('div')`
    margin: 0 20px;
`;

const StatusBadge = ({ value }) => <StyledBadge label={value} variant="lightest" />;

const ListviewTableWithBrowserPagination = () => {
    return(
        <div className="rainbow-m-bottom_xx-large">
            <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
            <StyledContainer>
                <TableWithBrowserPagination pageSize={5} data={Users} keyField="id" variant="listview">
                    <Column header="Name" field="name" />
                    <Column header="Status" field="status" component={StatusBadge} />
                    <Column header="Company" field="company" />
                    <Column header="Email" field="email" />
                    <Column header="Date of Birth" field="dob" />
                    <Column header="City" field="city" />
                </TableWithBrowserPagination>
            </StyledContainer>
        </div>
    )
}

    <ListviewTableWithBrowserPagination />
```
