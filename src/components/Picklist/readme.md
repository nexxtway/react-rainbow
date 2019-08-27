##### Picklist base

    initialState = { value: { name: 'option 1', label:'All Buildings' } , };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist onChange={(value) => setState({ value })} value={state.value} placeholder="Choose...">
                    <PicklistOption name="option 1" label="All Buildings" />
                    <PicklistOption name="option 2" label="New Building" />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" />
                    <PicklistOption name="option 4" label="Empire State" />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>

##### Picklist with icons

    initialState = { value: null, };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist placeholder="Choose..." onChange={(value) => setState({ value })} value={state.value}>
                    <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                    <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 4" label="Empire State" icon={<BuildingIcon />} />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>

##### Picklist disabled

    initialState = { value: { name: 'option 1', label:'All Buildings' } , };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist disabled value={state.value} />
            </div>
        </GlobalHeader>
    </div>

##### Picklist readOnly

    initialState = { value: { name: 'option 1', label:'All Buildings', icon: <DashboardIcon /> } , };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist readOnly value={state.value} />
            </div>
        </GlobalHeader>
    </div>

##### Picklist required with error

    initialState = { value: null, };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    placeholder="Choose..."
                    required
                    error="This field is required"
                    onChange={(value) => setState({ value })}
                    value={state.value}
                >
                    <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                    <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 4" label="Empire State" icon={<BuildingIcon />} />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>

##### Picklist with redux-form

    const { Field, reduxForm } = require('redux-form');

    function Form({ handleSubmit, onSubmit }) {
        return (
            <form className="rainbow-flex rainbow-align_right" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Field component={Picklist} name="option" placeholder="Choose...">
                    <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                    <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<BuildingIcon />} />
                    <PicklistOption name="option 4" label="Empire State" icon={<BuildingIcon />} />
                </Field>
                <Button label="Submit" type="submit" />
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
