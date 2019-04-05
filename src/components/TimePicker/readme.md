##### TimePicker base:

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            value={state.time}
            label="TimePicker Label"
            onChange={ value => setState({ time: value }) } />
    </div>


##### TimePicker with inital value:

    initialState = { time: '13:32' };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            value={state.time}
            label="TimePicker Label"
            onChange={ value => setState({ time: value }) } />
    </div>


##### TimePicker required:

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            required
            value={state.time}
            label="TimePicker Label"
            onChange={ value => setState({ time: value }) } />
    </div>


##### TimePicker with error:

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            required
            error="Select a time is Required"
            value={state.time}
            label="TimePicker Label"
            onChange={ value => setState({ time: value }) } />
    </div>


##### TimePicker disabled:

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            disabled
            value={state.time}
            label="TimePicker Label"
            onChange={ value => setState({ time: value }) } />
    </div>
