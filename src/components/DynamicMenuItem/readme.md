# DynamicMenuItem hidden
##### To render a menu item conditionally you can use the `renderIf` prop. Pass a function that receives the row data as argument, and return if the item should be visible or not.

```js
import React from 'react';
import { Table, Column, DynamicMenuItem } from 'react-rainbow-components';

const DynamicMenuItemExample = () => {
    const shouldRenderDelete = rowData => rowData.company.toLowerCase() !== 'nexxtway';

    return (
        <div className="rainbow-p-bottom_xx-large">
            <Table keyField="id" data={DataTable}>
                <Column header="Name" field="name" />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
                <Column type="action">
                    <DynamicMenuItem
                        label="Edit"
                        onClick={(event, data) => console.log(`Edit ${data.name}`)}
                    />
                    <DynamicMenuItem
                        label="Delete"
                        onClick={(event, data) => console.log(`Delete ${data.name}`)}
                        renderIf={shouldRenderDelete}
                    />
                </Column>
            </Table>
        </div>
    );
}

    <DynamicMenuItemExample />
```

# DynamicMenuItem disabled
##### If you want to disable an item instead of hidding it, you can do so with the `disabled` prop. Pass a function that receives the row data and returns true if the item should be disabled.

```js
import React from 'react';
import { Table, Column, DynamicMenuItem } from 'react-rainbow-components';

const DynamicMenuItemExample = () => {
    const shouldDisableDelete = rowData => rowData.company.toLowerCase() === 'nexxtway';

    return (
        <div className="rainbow-p-bottom_xx-large">
            <Table keyField="id" data={DataTable}>
                <Column header="Name" field="name" />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
                <Column type="action">
                    <DynamicMenuItem
                        label="Edit"
                        onClick={(event, data) => console.log(`Edit ${data.name}`)}
                    />
                    <DynamicMenuItem
                        label="Delete"
                        onClick={(event, data) => console.log(`Delete ${data.name}`)}
                        disabled={shouldDisableDelete}
                    />
                </Column>
            </Table>
        </div>
    );
}

    <DynamicMenuItemExample />
```