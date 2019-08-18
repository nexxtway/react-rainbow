Example:

    const RenderIf = require('../../components/RenderIf').default;
    const option = { name: 'option 3', label: 'Option 3' };
    initialState = { showOption2: false, value: null, };

    <div className="rainbow-p-around_x-large">
        <Picklist label="Picklist label" onChange={(value) => setState({ value })} value={state.value}>
            <PicklistOption name="header 1" label="Header 1" variant="header" />
            <PicklistOption name="option 1" label="Option 1" />
            <RenderIf isTrue={state.showOption2}>
                <PicklistOption name="option 2" label="Option 2" />
            </RenderIf>
            <PicklistOption name="header 2" label="Header 2" variant="header" />
            <PicklistOption name="option 3" label="Option 3" />
            <PicklistOption name="option 4" label="Option 4" />
            <PicklistOption name="option 5" label="Option 5" />
            <PicklistOption name="option 6" label="Option 6" />
        </Picklist>
        <br/>
        <Button label="Toggle Option 2" onClick={() => setState({ showOption2: !state.showOption2 })} />
        <Button label="Set Value" onClick={() => setState({ value: option })} />
        <Button label="Clear Value" onClick={() => setState({ value: null })} />
        <div style={{ height:200 }} />
    </div>

Example with redux form:

    const { Field, reduxForm } = require('redux-form');

    function Form({ handleSubmit, onSubmit }) {
        return (
            <form className="rainbow-p-around_x-large" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={Picklist}
                    name="option"
                >
                    <PicklistOption name="option 1" label="Option 1" />
                    <PicklistOption name="option 2" label="Option 2" />
                    <PicklistOption name="option 3" label="Option 3" />
                    <PicklistOption name="option 4" label="Option 4" />
                    <PicklistOption name="option 5" label="Option 5" />
                </Field>
                <Button label="Submit" type="submit" />
            </form>
        );
    }

    const PicklistForm = reduxForm({
        form: 'picklist-form',
        touchOnBlur: false,
    })(Form);

    <PicklistForm onSubmit={values => console.log(values)} />
