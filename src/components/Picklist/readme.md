##### Picklist base

    const containerStyles = { paddingBottom: '12rem' };
    initialState = { value: null, };

    <div style={containerStyles}>
        <header className="rainbow-align-content_space-between rainbow-p-vertical_small rainbow-p-horizontal_medium react-rainbow-golbal-header rainbow-background-color_white">
            <img src="images/rainbow-logo.svg" height="40" width="40" alt="rainbow logo" />
            <div className="rainbow-flex rainbow-align_right">
                <Picklist onChange={(value) => setState({ value })} value={state.value}>
                    <PicklistOption name="option 1" label="All Buildings" />
                    <PicklistOption name="option 2" label="New Building" />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" />
                    <PicklistOption name="option 4" label="Empire State" />
                </Picklist>
            </div>
        </header>
    </div>

##### Picklist with icons

    const containerStyles = { paddingBottom: '12rem' };
    initialState = { value: null, };
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity, faBuilding, faPlusCircle } = require('@fortawesome/free-solid-svg-icons');
    const IconStyles = {
        color: '#01b6f5',
    };

    <div style={containerStyles}>
        <header className="rainbow-align-content_space-between rainbow-p-vertical_small rainbow-p-horizontal_medium react-rainbow-golbal-header rainbow-background-color_white">
            <img src="images/rainbow-logo.svg" height="40" width="40" alt="rainbow logo" />
            <div className="rainbow-flex rainbow-align_right">
                <Picklist onChange={(value) => setState({ value })} value={state.value}>
                    <PicklistOption name="option 1" label="All Buildings" icon={<span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>} />
                    <PicklistOption name="option 2" label="New Building" icon={<span style={IconStyles}> <FontAwesomeIcon icon={faPlusCircle} /> </span>} />
                    <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                    <PicklistOption name="option 3" label="Experimental Building" icon={<span style={IconStyles}> <FontAwesomeIcon icon={faBuilding} /> </span>} />
                    <PicklistOption name="option 4" label="Empire State" icon={<span style={IconStyles}> <FontAwesomeIcon icon={faBuilding} /> </span>} />
                </Picklist>
            </div>
        </header>
    </div>

##### Example

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
            <PicklistOption name="option 7" label="Option 7" />
            <PicklistOption name="option 8" label="Option 8" />
            <PicklistOption name="option 9" label="Option 9" />
            <PicklistOption name="option 10" label="Option 10" />
        </Picklist>
        <br/>
        <Button label="Toggle Option 2" onClick={() => setState({ showOption2: !state.showOption2 })} />
        <Button label="Set Value" onClick={() => setState({ value: option })} />
        <Button label="Clear Value" onClick={() => setState({ value: null })} />
    </div>

##### PickList with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faBuilding } = require('@fortawesome/free-regular-svg-icons');
    const IconStyles = {
        height: 30,
        width: 30,
        backgroundColor: '#01b6f5',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    };

    const option = { name: 'option 3', label: 'Option 3', icon: <span style={IconStyles}> <FontAwesomeIcon icon={faBuilding} /> </span> };
    initialState = { value: null, };

    <div className="rainbow-p-around_x-large">
        <Picklist label="Picklist label" onChange={(value) => setState({ value })} value={state.value}>
            <PicklistOption name="option 1" label="Option 1" icon={<FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />} />
            <PicklistOption name="option 2" label="Option 2" icon={<FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />} />
            <PicklistOption name="option 3" label="Option 3" icon={<FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />} />
        </Picklist>
    </div>

##### PickList disabled

    <div className="rainbow-p-around_x-large">
        <Picklist
            disabled
            label="Picklist label"
            value={{ name: 'option 3', label: 'Option 3' }}
        />
    </div>

##### PickList required with error

    initialState = { value: null, };

    <div className="rainbow-p-around_x-large">
        <Picklist
            label="Picklist label"
            required
            error="This field is required"
            onChange={(value) => setState({ value })}
            value={state.value}
        >
            <PicklistOption name="option 1" label="Option 1" />
            <PicklistOption name="option 2" label="Option 2" />
            <PicklistOption name="option 3" label="Option 3" />
            <PicklistOption name="option 4" label="Option 4" />
            <PicklistOption name="option 5" label="Option 5" />
        </Picklist>
    </div>

##### PickList readonly

    <div className="rainbow-p-around_x-large">
        <Picklist
            readOnly
            label="Picklist label"
            value={{ name: 'option 3', label: 'Option 3' }}
        />
    </div>

##### Example with redux form

    const { Field, reduxForm } = require('redux-form');

    function Form({ handleSubmit, onSubmit }) {
        return (
            <form className="rainbow-p-around_x-large" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={Picklist}
                    name="option"
                    label="Picklist label"
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
