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
        return (
            <div>
                <Button variant="neutral" onClick={this.handleOnClick}>
                    <UploadIcon className="rainbow-m-right_x-small" />
                    Import
                </Button>
                <ImportRecordsFlow
                    isOpen={this.state.isOpen}
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
        return (
            <div>
                <Button variant="neutral" onClick={this.handleOnClick}>
                    <UploadIcon className="rainbow-m-right_x-small" />
                    Import
                </Button>
                <ImportRecordsFlow
                    isOpen={this.state.isOpen}
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
