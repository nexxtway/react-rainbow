##### TimePicker base:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            value={state.date}
            label="TimePicker Label"
            onChange={ value => setState({ date: value }) } />
    </div>


##### TimePicker 24-hours format:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <TimePicker
            value={state.date}
            label="TimePicker Label"
            onChange={ value => setState({ date: value }) }
            hours24 />
    </div>
