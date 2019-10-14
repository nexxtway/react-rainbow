##### DateTimePicker base:

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
        label="DateTimePicker label"
        value={state.value}
        onChange={value => setState({ value })}
        formatStyle="small"
    />
</div>;
```

##### DateTimePicker with date constraints:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        value={state.value}
        minDate={new Date(2018, 0, 4)}
        maxDate={new Date(2020, 0, 4)}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>;
```

##### DateTimePicker with different date formats:

```js
const inputStyles = {
    maxWidth: 320,
};

initialState = { value: new Date() };

<div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-flex_wrap">
    <DateTimePicker
        formatStyle="small"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
    <DateTimePicker
        formatStyle="medium"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
    <DateTimePicker
        formatStyle="large"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
</div>;
```

##### DateTimePicker required:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        required
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>;
```

##### DateTimePicker with error:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { value: undefined };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        required
        error="Field is required"
        placeholder="Select date and time"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>;
```

##### DateTimePicker disabled:

```js
const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker disabled value={new Date()} label="DateTimePicker Label" />
</div>;
```

##### DateTimePicker readOnly:

```js
const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker readOnly value={new Date()} label="DateTimePicker Label" />
</div>;
```
