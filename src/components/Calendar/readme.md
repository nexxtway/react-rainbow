##### basic example:
    initialState = { date: new Date() };
    const calendarContainerStyles = {
        width: '28rem',
        height: '26.5rem',
    };

    <div>
        <header className="rainbow-align-content_space-between rainbow-p-vertical_small rainbow-p-horizontal_medium react-rainbow-golbal-header rainbow-background-color_white">
            <img src="images/rainbow-logo.svg" height="40" width="40" alt="rainbow logo" />
            <div className="rainbow-flex rainbow-align_center">
                <Avatar
                    src="images/user/user3.jpg"
                    variant="circle" />
            </div>
        </header>
        <div className="rainbow-align-content_center rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
            <Card style={calendarContainerStyles} className="rainbow-p-around_large">
                <Calendar
                    value={state.date}
                    label="DatePicker Label" 
                    onChange={ value => setState({ date: value }) } />
            </Card>
        </div>
    </div>


##### Using dates contrains:
    initialState = { date: new Date() };
    const calendarContainerStyles = {
        width: '28rem',
        height: '26.5rem',
    };

    <div>
        <header className="rainbow-align-content_space-between rainbow-p-vertical_small rainbow-p-horizontal_medium react-rainbow-golbal-header rainbow-background-color_white">
            <img src="images/rainbow-logo.svg" height="40" width="40" alt="rainbow logo" />
            <div className="rainbow-flex rainbow-align_center">
                <Avatar
                    src="images/user/user3.jpg"
                    variant="circle" />
            </div>
        </header>
        <div className="rainbow-align-content_center rainbow-p-around_xx-large rainbow-p-bottom_xx-large">
            <Card style={calendarContainerStyles} className="rainbow-p-around_large">
                <Calendar
                    value={state.date}
                    minDate={new Date(2018, 0, 4)}
                    maxDate={new Date(2020, 0, 4)}
                    label="DatePicker Label" 
                    onChange={ value => setState({ date: value }) } />
            </Card>
        </div>
    </div>
