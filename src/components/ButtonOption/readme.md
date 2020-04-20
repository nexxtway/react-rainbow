##### ButtonOption base

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';

class ButtonOptionTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker 
                    className="rainbow-m-around_medium" 
                    label="Select view type" 
                    value={value} 
                    onChange={this.handleOnChange} 
                    name="filter" 
                    size="medium" 
                    bottomHelpText="Select one option"
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

<ButtonOptionTry />;

```
