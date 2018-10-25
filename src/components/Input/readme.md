##### input base

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            id="input-component-1"
            label="Input Label"
            placeholder="Placeholder text" />
    </div>


##### type of the inputs

    const inputContainerStyles = {
        width: '50%',
    };

    <div className="rainbow-p-around_x-large">
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Text"
                    placeholder="Placeholder text"
                    type="text" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Paassword"
                    placeholder="**********"
                    type="password" />

            </div>
        </div>
         <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input DateTime"
                    value="02/12/2018"
                    type="datetime" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input DateTime Local"
                    type="datetime-local" />

            </div>
        </div>
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Date"
                    type="date" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Month"
                    type="month" />

            </div>
        </div>
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Time"
                    type="time" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Week"
                    type="week" />

            </div>
        </div>
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Email"
                    placeholder="inputEmail@gmail.com"
                    type="email" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Number"
                    placeholder="1234567890"
                    type="number" />

            </div>
        </div>
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Url"
                    placeholder="https://react-rainbow-components.com"
                    type="url" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Search"
                    placeholder="Search"
                    type="search" />

            </div>
        </div>
        <div className="rainbow-flex">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Phone"
                    placeholder="111-111-1111"
                    type="tel" />

            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <Input
                    label="Input Color"
                    type="color" />

            </div>
        </div>
    </div>


##### input radio

    <div className="rainbow-p-around_x-large rainbow-m-top_medium rainbow-flex rainbow-justify_space-around">
        <Input
            className="rainbow-m-bottom_medium"
            type="radio"
            label="Input Radio Label" />
        <Input
            type="radio"
            error="This Field is Required"
            label="Input Radio Label" />
        <Input
            className="rainbow-m-bottom_medium"
            disabled
            type="radio"
            label="Input Radio Label" />
        <Input
            type="radio"
            bottomHelpText="ex: (111) 111 1111"
            label="Input Radio Label" />
    </div>


##### input type checkbox

    <div className="rainbow-p-around_x-large rainbow-m-top_medium rainbow-flex rainbow-justify_space-around">
        <Input
            className="rainbow-m-bottom_medium"
            type="checkbox"
            label="Input Checkbox Label" />
        <Input
            type="checkbox"
            error="This Field is Required"
            label="Input Checkbox Label" />
        <Input
            className="rainbow-m-bottom_medium"
            disabled
            type="checkbox"
            label="Input Checkbox Label" />
        <Input
            type="checkbox"
            bottomHelpText="ex: (111) 111 1111"
            label="Input Checkbox Label" />
    </div>


##### input with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faSearch,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <div className="rainbow-p-bottom_medium">
            <Input
                label="Input label"
                placeholder="Input with left icon"
                icon={
                    <FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />
                } />
        </div>
        <Input
            label="Input label"
            placeholder="Input with right icon"
            iconPosition="right"
            icon={
                <FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />
            } />
    </div>


##### input with help

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            label="Input label"
            placeholder="Input with inline help"
            bottomHelpText="ex: (111) 111 1111" />

    </div>


##### input required

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            label="Input label"
            placeholder="Input required"
            required />
    </div>


##### input disabled

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            label="Input label"
            value="Input disabled"
            disabled />
    </div>


##### input centered

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            label="Input label"
            placeholder="center"
            isCentered />
    </div>


##### input error

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faBan,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <div className="rainbow-p-bottom_medium">
            <Input
                label="Input label"
                placeholder="Placeholder text"
                error="This Field is Required" />

        </div>
        <Input
            label="Input label"
            placeholder="Placeholder text with icon"
            error="This Field is Required"
            icon={
                <FontAwesomeIcon icon={faBan} />
            } />
    </div>


##### input read only

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Input
            label="Input Label"
            readOnly
            value="Read Only" />
    </div>
