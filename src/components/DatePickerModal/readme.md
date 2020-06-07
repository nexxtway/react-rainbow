##### DatePickerModal base:

```js
import { Button, DatePickerModal } from 'react-rainbow-components';

initialState = { isOpen: false };

function getDate(value, selectionType) {
    if (selectionType === 'single' && Array.isArray(value)) return value[0];
    return value;
}

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex"
>
    <div className="rainbow-p-horizontal_medium">
        <Button
            label="Click to select a date"
            onClick={() => setState({ isOpen: true, selectionType: 'single', value: null, title: 'Select a date' })} />
    </div>
    <div className="rainbow-p-horizontal_medium">
        <Button
            label="Click to select a range of dates"
            onClick={() => setState({ isOpen: true, selectionType: 'range', value: null, title: 'Select range of dates' })} />
    </div>
    <DatePickerModal
        title={state.title}
        isOpen={state.isOpen}
        value={getDate(state.value)}
        selectionType={state.selectionType}
        onChange={value => setState({ value })}
        onRequestClose={() => setState({ isOpen: false })}
    />
</div>
```

##### DatePickerModal with double calendar:

```js
import { Button, DatePickerModal } from 'react-rainbow-components';

initialState = { isOpen: false };

function getDate(value, selectionType) {
    if (selectionType === 'single' && Array.isArray(value)) return value[0];
    return value;
}

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex"
>
    <div className="rainbow-p-horizontal_medium">
        <Button
            label="Click to select a date"
            onClick={() => setState({ isOpen: true, selectionType: 'single', value: null, title: 'Select a date' })} />
    </div>
    <div className="rainbow-p-horizontal_medium">
        <Button
            label="Click to select a range of dates"
            onClick={() => setState({ isOpen: true, selectionType: 'range', value: null, title: 'Select range of dates' })} />
    </div>
    <DatePickerModal
        title={state.title}
        isOpen={state.isOpen}
        value={getDate(state.value)}
        variant="double"
        selectionType={state.selectionType}
        onChange={value => setState({ value })}
        onRequestClose={() => setState({ isOpen: false })}
    />
</div>
```
