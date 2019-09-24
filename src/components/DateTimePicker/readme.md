##### DateTimePicker

```js
const containerStyles = {
    maxWidth: 400,
};
const initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        value={state.value}
        onChange={value => setState({ value })}
        formatStyle="small"
    />
</div>;
```

##### DateTimePicker

```js
const containerStyles = {
    maxWidth: 400,
};
const initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker value={state.value} onChange={value => setState({ value })} />
</div>;
```

##### DateTimePicker

```js
const containerStyles = {
    maxWidth: 400,
};
const initialState = { value: new Date() };
const datetimePickerRef = React.createRef();
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        ref={datetimePickerRef}
        value={state.value}
        onChange={value => setState({ value })}
        formatStyle="large"
    />

    <br />
    <Button label="click element" onClick={() => datetimePickerRef.current.focus()} />
</div>;
```
