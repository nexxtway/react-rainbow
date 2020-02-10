##### Checkbox Group basic

```js
import React from 'react';
import { CheckboxGroup } from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    id="checkbox-group-1"
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group disabled

```js
import React from 'react';
import { CheckboxGroup } from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: true },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: true },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: true },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group required

```js
import React from 'react';
import { CheckboxGroup } from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    required
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group error

```js
import React from 'react';
import { CheckboxGroup } from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    error="This field is required"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group basic

```js
import {useState} from 'react';
import { CheckboxGroup } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

const Title = styled.h2.attrs(props => {
   return props.theme.rainbow.palette;
})`
    font-size: 24px;
    margin-bottom: 20px;
    color: ${props => props.text.main}
`;

const ProfileContainer = styled.div`
     @media (max-width: 768px) {
        flex-direction: column;
     }
`;

const ProfileInfoItem = styled.div`
    margin-bottom: 15px;
    :last-child{ margin-bottom: 0; }
`;

const ProfileLabel = styled.div.attrs(props => {
  return props.theme.rainbow.palette;
})`
    font-size: 14px;
    color: ${props => props.text.label}   
`;

const ProfileDescription = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 16px;
    color: ${props => props.text.main}
`;

const ProfileLeftCol = styled.div`
    min-width: 250px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const options = [
    { value: 'push-notifications', label: 'Push Notifications', disabled: false },
    { value: 'email', label: 'Email', disabled: false },
    { value: 'sms', label: 'SMS', disabled: false },
];
const defaultOptions = ['email'];


const CheckBoxGroupProfile = () => {
    const [values, setSelected] = useState(defaultOptions);
    
    return (
        <Container className="rainbow-p-around_x-large rainbow-p-bottom_xx-large">
            <Title>Profile</Title>

            <ProfileContainer className="rainbow-flex">

                <ProfileLeftCol className="rainbow-flex">

                    <div>
                        <img src="https://placeimg.com/110/110/people"/>
                    </div>

                    <div className="rainbow-p-left_medium">
                        <ProfileInfoItem>
                            <ProfileLabel>Name</ProfileLabel>
                            <ProfileDescription>Jane Doe</ProfileDescription>
                        </ProfileInfoItem>

                        <ProfileInfoItem>
                            <ProfileLabel>Company</ProfileLabel>
                            <ProfileDescription>Nexxtway</ProfileDescription>
                        </ProfileInfoItem>
                    </div>

                </ProfileLeftCol>

                <div>
                    <CheckboxGroup
                        id="checkbox-group-2"
                        label="Checkbox Group Label"
                        options={options}
                        value={values}
                        onChange={setSelected}
                    />
                </div>

            </ProfileContainer>
        </Container>
    );
};

<CheckBoxGroupProfile />
```
