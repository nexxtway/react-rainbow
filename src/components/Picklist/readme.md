Example:

    <div className="rainbow-p-around_x-large">
        <Picklist menuSize="large" onChange={(value) => setState({ value })} value={state.value}>
            <PicklistOption variant="header" label="Header 1" />
            <PicklistOption name="option 1" label="Option 1" />
            <PicklistOption variant="header" label="Header 2" />
            <PicklistOption name="option 2" label="Option 2" />
            <PicklistOption name="option 3" label="Option 3" />
        </Picklist>
    </div>
