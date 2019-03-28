##### DatePicker base:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) } />
    </div>


##### DatePicker with dates contrains:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker
            value={state.date}
            minDate={new Date(2018, 0, 4)}
            maxDate={new Date(2020, 0, 4)}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) } />
    </div>


##### DatePicker with different dates formats:

    initialState = { date: new Date() };
    <div className="rainbow-flex rainbow-p-vertical_large rainbow-m-horizontal_xx-large">
        <DatePicker
            formatStyle="small"
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) }
            className="rainbow-m-horizontal_small" />

        <DatePicker
            formatStyle="medium"
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) }
            className="rainbow-m-horizontal_small" />

        <DatePicker
            formatStyle="large"
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) }
            className="rainbow-m-horizontal_small" />
    </div>


##### DatePicker required:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker
            required
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) } />
    </div>


##### DatePicker with error:

    initialState = { date: undefined };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker
            required
            error="Select a date is Required"
            placeholder="Select a date"
            value={state.date}
            label="DatePicker Label"
            onChange={ value => setState({ date: value }) } />
    </div>


##### DatePicker disabled:

    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker
            disabled
            value={state.date}
            label="DatePicker Label" 
            onChange={ value => setState({ date: value }) } />
    </div>
