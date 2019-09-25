##### TimePicker base:

```js
const containerStyles = {
    maxWidth: 700,
};

<TimePicker
    id="time-picker-1"
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker with inital value:

```js
const containerStyles = {
    maxWidth: 700,
};

initialState = { time: '13:32' };

<TimePicker
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker required:

```js
const containerStyles = {
    maxWidth: 700,
};

<TimePicker
    required
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker with error:

```js
const containerStyles = {
    maxWidth: 700,
};

<TimePicker
    required
    error="Select a time is Required"
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker disabled:

```js
const containerStyles = {
    maxWidth: 700,
};

<TimePicker
    disabled
    value="-- : -- --"
    label="TimePicker Label"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker readOnly:

```js
const containerStyles = {
    maxWidth: 700,
};

<TimePicker
    readOnly
    value="13:32"
    label="TimePicker Label"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```
