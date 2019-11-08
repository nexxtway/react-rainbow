##### VisualPickerOptionFooter base:

```js
import React from 'react';
import {
    VisualPicker,
    VisualPickerOption,
    VisualPickerOptionFooter,
} from 'react-rainbow-components';

const iconStyles = { width: 50, height: 50 };

class SimpleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker value={this.state.value} onChange={this.handleOnChange}>
                <VisualPickerOption
                    name="option-1"
                    footer={
                        <VisualPickerOptionFooter label="Launch your App" description="Start Now" />
                    }
                >
                    <StartupIcon style={iconStyles} />
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <SimpleVisualPicker />
</div>
```
