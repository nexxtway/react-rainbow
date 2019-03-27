##### basic example:
    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker 
            value={state.date}
            label="DatePicker Label" 
            onChange={ value => setState({ date: value }) }
        />
    </div>

##### Using dates contrains:
    initialState = { date: new Date() };
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <DatePicker 
            value={state.date}
            minDate={new Date(2018, 0, 4)}
            maxDate={new Date(2020, 0, 4)}
            label="DatePicker Label" 
            onChange={ value => setState({ date: value }) }
        />
    </div>    
