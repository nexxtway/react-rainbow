##### Option base

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

const initialState = { value: { name: 'option 1', label: 'Experimental Building' } };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader
            src="images/user/user2.jpg"
            className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        >
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    style={containerStyles}
                    onChange={value => setState({ value })}
                    value={state.value}
                    label="Select Building"
                    hideLabel
                >
                    <Option name="header" label="Your Buildings" variant="header" />
                    <Option name="option 1" label="Experimental Building" />
                    <Option name="option 2" label="Empire State" />
                    <Option name="option 3" label="Plaza" />
                    <Option name="option 4" label="Central Park" />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>
```

##### Option with icons

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

const initialState = { value: null };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader
            src="images/user/user3.jpg"
            className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        >
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    style={containerStyles}
                    placeholder="Choose Building"
                    onChange={value => setState({ value })}
                    value={state.value}
                    label="Select Building"
                    hideLabel
                >
                    <Option name="option 1" label="Empire State" icon={<BuildingIcon />} />
                    <Option name="option 2" label="Chrysler Building" icon={<BuildingIcon />} />
                    <Option name="option 3" label="Plaza" icon={<BuildingIcon />} />
                    <Option name="option 4" label="Central Park" icon={<BuildingIcon />} />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>
```

##### Option accept number on name prop

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

const initialState = { value: { name: 1, label: 'Experimental Building' } };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader
            src="images/user/user2.jpg"
            className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        >
            <div className="rainbow-flex rainbow-align_right">
                <Picklist
                    style={containerStyles}
                    onChange={value => setState({ value })}
                    value={state.value}
                    label="Select Building"
                    hideLabel
                >
                    <Option name="header" label="Your Buildings" variant="header" />
                    <Option name={1} label="Experimental Building" />
                    <Option name={2} label="Empire State" />
                    <Option name={3} label="Plaza" />
                    <Option name={4} label="Central Park" />
                </Picklist>
            </div>
        </GlobalHeader>
    </div>
```
