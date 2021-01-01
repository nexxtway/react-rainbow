#### Basic example:

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
        className="rainbow-m-vertical_large rainbow-p-horizontal_xx-large rainbow-m_auto rainbow-flex_wrap"
    >
        <DraggableList keyField="id" data={data} field="name" />
    </div>
```

#### Custom item component example:

There are use cases where you want to render your custom UI for every item in the list. In that case, you can use the `component` prop that is a Function | Class Component, when internally the draggable component instantiates the component, it will pass down as properties the `value`  and entire `item` object plus any other prop passed to the DragglableList.

```js
import React from 'react';
import styled from 'styled-components';
import { DraggableList } from 'react-rainbow-components';

const data = [
    { id: 'id1', name: 'Text', description: 'Single line or multiline text area.', icon: <TextIcon /> },
    { id: 'id2', name: 'Select from List', description: 'Choose one or more options form a list.', icon: <ListIcon /> },
    { id: 'id3', name: 'Numeric', description: 'It accepts only numbers.', icon: <OneIcon /> },
    { id: 'id3', name: 'Upload', description: 'Send files via Documents and Media.', icon: <UploadIcon /> },
];

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
`;

const Value = styled.h1`
    color: ${props => props.theme.rainbow.palette.text.label};
    font-size: 14px;
    line-height: 14px;
`;
const Description = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 12px;
    line-height: 12px;
    margin-top: 4px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.rainbow.palette.background.highlight};
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: ${props => props.theme.rainbow.palette.text.label};

    > svg {
        width: 16px;
        height: 16px;
    }
`;

const Item = ({ value, row }) => (
    <Container>
        <IconContainer>{row.icon}</IconContainer>
        <Content>
            <Value>{value}</Value>
            <Description>{row.description}</Description>
        </Content>
    </Container>
);

    <div className="rainbow-m-vertical_large rainbow-p-horizontal_xx-large rainbow-m_auto rainbow-flex_wrap">
        <DraggableList keyField="id" data={data} field="name" component={Item} />
    </div>
```
