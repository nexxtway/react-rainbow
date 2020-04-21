##### StrongPasswordInput base

```js
import React from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<StrongPasswordInput
    id="strongpasswordinput-component-1"
    label="Input Label"
    placeholder="Placeholder text"
    style={containerStyles}
    type="text"
    bottomHelpText="Your password must be at least 8 characters long."
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### StrongPasswordInput working

```js
import React from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

class ControlledStrongPasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({ value: event.target.value });
    }

    getStrength() {
        const { value } = this.state;
        const length = value.length;

        if (length === 0) {
            return undefined;
        } else if (length <= 3) {
            return 'poor';
        } else if (length > 3 && length < 8) {
            return 'average';
        } else {
            return 'strong';
        }
    }

    render() {
        const passwordState = this.getStrength();        

        return (
            <div>
                <StrongPasswordInput
                    id="input-component-1"
                    label="Input Label"
                    placeholder="Placeholder text"
                    style={containerStyles}
                    type="text"
                    bottomHelpText="Your password must be at least 8 characters long."
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                    passwordState={passwordState}
                    passwordStateLabel={passwordState}
                    onChange={this.handleOnChange}
                    required
                />;                
            </div>
        )
    }
}

<ControlledStrongPasswordInput />
```
