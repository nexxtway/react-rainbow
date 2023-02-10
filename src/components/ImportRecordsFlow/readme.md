##### ImportRecordsFlow base:

```js
import React from 'react';
import { ImportRecordsFlow, Button } from 'react-rainbow-components';

const containerStyles = { height: 360 };

const schema = {
    collection: 'users',
    attributes: {
        name: {
            type: String,
            required: true,
        },
        email: String,
        driver: {
            type: Number,
            defaultTo: 0,
        },
        date: Date,
    },
};

class ImportRecordsFlowModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Button variant="neutral" onClick={this.handleOnClick}>
                    <UploadIcon className="rainbow-m-right_x-small" />
                    Import
                </Button>
                <ImportRecordsFlow
                    isOpen={isOpen}
                    onRequestClose={this.handleOnClose}
                    schema={schema}
                    onComplete={data => console.log(data)}
                />
            </div>
        );
    }
}

    <div style={containerStyles}>
        <GlobalHeader>
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
        </GlobalHeader>
    </div>
```


##### ImportRecordsFlow add-records:

```js
import React from 'react';
import { ImportRecordsFlow, Button } from 'react-rainbow-components';

const containerStyles = { height: 360 };

const schema = {
    collection: 'users',
    attributes: {
        name: {
            type: String,
            required: true,
        },
        email: String,
        driver: {
            type: Number,
            defaultTo: 0,
        },
        date: Date,
    },
};

class ImportRecordsFlowModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Button variant="neutral" onClick={this.handleOnClick}>
                    <UploadIcon className="rainbow-m-right_x-small" />
                    Import
                </Button>
                <ImportRecordsFlow
                    isOpen={isOpen}
                    onRequestClose={this.handleOnClose}
                    schema={schema}
                    onComplete={data => console.log(data)}
                    actionType="add-records"
                />
            </div>
        );
    }
}

    <div style={containerStyles}>
        <GlobalHeader>
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
        </GlobalHeader>
    </div>
```
# ImportRecordFlow using validateRecordsFn
##### The `validateRecordsFn` prop is a function to validate the record before import it. This function will be invoked on each record of the CSV returning an object with the errors found in a record on each field. If the object doesn't have properties then the record is valid.

```js
import React from 'react';
import { ImportRecordsFlow, Button } from 'react-rainbow-components';

const containerStyles = { height: 360 };

const schema = {
    collection: 'contacts',
    attributes: {
        firstName: {
            type: String,
            required: true,
        },
        email: String,
        lastName: String,
        phone: {
            type: String,
            required: true,
        },
    },
};

function isPhoneValid(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};

function isEmailValid (email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

function validateRecords(record) {
    const error = {};
    if (record.firstName === undefined ) {
        error.firstname = 'Name is required';
    }
    if (record.phone !== undefined && !isPhoneValid(record.phone)) {
        error.phone = 'Phone is not valid';
    }
    if (!isEmailValid(record.email)) {
        error.email = 'Email is not valid';
    }
    return error;
}

class ImportRecordsFlowModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Button variant="neutral" onClick={this.handleOnClick}>
                    <UploadIcon className="rainbow-m-right_x-small" />
                    Import
                </Button>
                <ImportRecordsFlow
                    isOpen={isOpen}
                    onRequestClose={this.handleOnClose}
                    schema={schema}
                    onComplete={data => console.log(data)}
                    actionType="add-records"
                    validateRecordFn={validateRecords}
                />
            </div>
        );
    }
}

    <div style={containerStyles}>
        <GlobalHeader>
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
        </GlobalHeader>
    </div>
```
