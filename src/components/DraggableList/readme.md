####  Basic example:

By default the component will render the value that map the `field` prop value on every object item in the `data`. e.g. If field="name" for the first item will render `data[0].name`.


```js
import React from 'react';
import { DraggableList } from 'react-rainbow-components';

const data = [
    { id: 'id1', name: 'Maxx Greene' },
    { id: 'id2', name: 'Leandro Torres' },
    { id: 'id3', name: 'Tahimi Leon' },
];

    <div
        className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
    >
        <DraggableList keyField="id" data={data} field="name" />    
    </div>
```

####  Custom item component example:

There are use cases where you want to render your custom UI for every item in the list. In that case, you can use the `component` prop that is a Function | Class Component, when internally the draggable component instantiates the component, it will pass down as properties the `value`  and entire `item` object plus any other prop passed to the DragglableList.

```js
import React from 'react';
import { DraggableList } from 'react-rainbow-components';

const data = [
    { id: 'id1', name: 'Maxx Greene' },
    { id: 'id2', name: 'Leandro Torres' },
    { id: 'id3', name: 'Tahimi Leon' },
];

const Item = ({ value }) => (
    <b>{value}</b>
);

    <div
        className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
    >
        <DraggableList keyField="id" data={data} field="name" component={Item} />    
    </div>
```