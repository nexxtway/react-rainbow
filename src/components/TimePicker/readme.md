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
