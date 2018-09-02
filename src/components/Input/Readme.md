##### input base

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <Input
            label="Input Label"
            placeholder="Placeholder text" />
    </div>


##### type of the inputs

    <div className="slds-p-around_x-large">
        <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Text"
                    placeholder="Placeholder text"
                    type="text" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Paassword"
                    placeholder="**********"
                    type="password" />

            </div>
        </div>
         <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input DateTime"
                    value="02/12/2018"
                    type="datetime" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input DateTime Local"
                    type="datetime-local" />

            </div>
        </div>
        <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Date"
                    type="date" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Month"
                    type="month" />

            </div>
        </div>
        <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Time"
                    type="time" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Week"
                    type="week" />

            </div>
        </div>
        <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Email"
                    placeholder="inputEmail@gmail.com"
                    type="email" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Number"
                    placeholder="1234567890"
                    type="number" />

            </div>
        </div>
        <div className="slds-grid slds-p-bottom_medium">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Url"
                    placeholder="https://react-lightning-components.com"
                    type="url" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Search"
                    placeholder="Search"
                    type="search" />

            </div>
        </div>
        <div className="slds-grid">
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Phone"
                    placeholder="111-111-1111"
                    type="tel" />

            </div>
            <div className="slds-p-horizontal_small slds-size_1-of-2">
                <Input
                    label="Input Color"
                    type="color" />

            </div>
        </div>
    </div>


##### input with icons

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <div className="slds-p-bottom_medium">
            <Input
                label="Input label"
                placeholder="Input with left icon"
                iconName="utility:search"
                iconPosition="left" />

        </div>
        <Input
            label="Input label"
            placeholder="Input with right icon"
            iconName="utility:search"
            iconPosition="right" />
    </div>


##### input with help

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <div className="slds-p-bottom_medium">
            <Input
                label="Input label"
                placeholder="Input with inline help"
                bottomHelpText="ex: (111) 111 1111" />

        </div>

        <Input
            label="Input label"
            placeholder="Input with inline help and icon"
            bottomHelpText="ex: (111) 111 1111"
            iconName="utility:world"
            iconPosition="left" />
    </div>


##### input required

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <Input
            label="Input label"
            placeholder="Input required"
            required />
    </div>


##### input disabled

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <Input
            label="Input label"
            value="Input disabled"
            disabled />
    </div>


##### input centered

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <Input
            label="Input label"
            placeholder="center"
            isCentered />
    </div>


##### input error

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <div className="slds-p-bottom_medium">
            <Input
                label="Input label"
                placeholder="Placeholder text"
                error="This Field is Required" />

        </div>
        <Input
            label="Input label"
            placeholder="Placeholder text with icon"
            iconName="utility:error"
            iconPosition="left"
            error="This Field is Required" />
    </div>


##### input read only

    <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
        <Input
            label="Input Label"
            readOnly
            value="Read Only" />
    </div>
