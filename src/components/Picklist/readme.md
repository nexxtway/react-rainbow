##### Picklist base

    const containerStyles = {
        width: '210px',
    };

    initialState = { value: { name: 'option 4', label:'Central Park' }, };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    style={containerStyles}
                    onChange={(value) => setState({ value })}
                    value={state.value}
                    label="Select Building"
                    hideLabel>

                    <PicklistOption name="header" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 1" label="Experimental Building" />
                    <PicklistOption name="option 2" label="Empire State" />
                    <PicklistOption name="option 3" label="Chrysler Building" />
                    <PicklistOption name="option 4" label="Central Park" />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>

##### Picklist with multiple options

    const containerStyles = {
        width: '240px',
    };

    initialState = { value: null, };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    style={containerStyles}
                    placeholder="Choose Building"
                    onChange={(value) => setState({ value })}
                    value={state.value}
                    label="Select Building"
                    hideLabel>

                    <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                    <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 4" label="Empire State" icon={<BuildingIcon />} />
                    <PicklistOption name="option 5" label="Chrysler Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 6" label="Plaza" icon={<BuildingIcon />} />
                    <PicklistOption name="option 7" label="Central Park" icon={<BuildingIcon />} />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>

##### Picklist disabled

    initialState = { value: { name: 'option 1', label:'All Buildings' } , };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    disabled
                    value={state.value}
                    label="Select Building"
                    hideLabel />
            </div>
        </GlobalHeader>
    </div>

##### Picklist with redux-form

    const containerStyles = {
        width: '240px',
    };

    const { Field, reduxForm } = require('redux-form');

    function Form({ handleSubmit, onSubmit }) {
        return (
            <form className="rainbow-flex rainbow-align_right" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Field
                    style={containerStyles}
                    component={Picklist}
                    name="option"
                    placeholder="Choose Building"
                    label="Select Building"
                    hideLabel>

                    <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                    <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 4" label="Empire State" icon={<BuildingIcon />} />
                </Field>
                <Button className="rainbow-m-left_small" label="Submit" type="submit" />
            </form>
        );
    }

    const PicklistForm = reduxForm({
        form: 'picklist-form',
        touchOnBlur: false,
    })(Form);

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <PicklistForm onSubmit={values => console.log(values)} />
        </GlobalHeader>
    </div>
