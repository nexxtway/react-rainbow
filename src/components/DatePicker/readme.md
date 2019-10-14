##### DatePicker base:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { date: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        value={state.date}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>;
```

##### DatePicker with date constraints:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { date: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        value={state.date}
        minDate={new Date(2018, 0, 4)}
        maxDate={new Date(2020, 0, 4)}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>;
```

##### DatePicker with different date formats:

```js
initialState = { date: new Date() };
<div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-flex_wrap">
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="small"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="medium"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="large"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
</div>;
```

##### DatePicker required:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { date: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        required
        value={state.date}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>;
```

##### DatePicker with error:

```js
const containerStyles = {
    maxWidth: 400,
};

initialState = { date: undefined };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        required
        error="Select a date is Required"
        placeholder="Select a date"
        value={state.date}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>;
```

##### DatePicker disabled:

```js
const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker disabled value={new Date()} label="DatePicker Label" />
</div>;
```

##### DatePicker readOnly:

```js
const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker readOnly value={new Date()} label="DatePicker Label" />
</div>;
```
