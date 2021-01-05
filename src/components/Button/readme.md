# Buttons variant
##### Buttons change color according to the variant applied to them. In the examples below, you can find all the variants that we offer you.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button variant="base" label="Button Base" className="rainbow-m-around_medium" />
        <Button label="Button Outline Brand" variant="outline-brand" className="rainbow-m-around_medium" />
        <Button label="Button Border" variant="border" className="rainbow-m-around_medium" />
        <Button label="Button Neutral" variant="neutral" className="rainbow-m-around_medium" />
        <Button label="Button Border Filled" variant="border-filled" className="rainbow-m-around_medium" />
        <Button
            label="Button Brand"
            onClick={() => alert('clicked!')}
            variant="brand"
            className="rainbow-m-around_medium"
        />
        <Button
            label="Button Success"
            onBlur={() => alert('blurred!')}
            variant="success"
            className="rainbow-m-around_medium"
        />
        <Button label="Button Destructive" variant="destructive" className="rainbow-m-around_medium" />
    </div>
```

# Buttons with shaded variant
##### The appearance of a button can be changed by implementing the shaded variant, so the whole section will appear with a shadow around it.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button
            shaded
            label="Button Brand"
            onClick={() => alert('clicked!')}
            variant="brand"
            className="rainbow-m-around_medium"
        />
        <Button
            shaded
            label="Button Neutral"
            variant="neutral"
            className="rainbow-m-around_medium"
        />
        <Button
            shaded
            label="Button Border Filled"
            onBlur={() => alert('blurred!')}
            variant="border-filled"
            className="rainbow-m-around_medium"
        />
    </div>
```

# Buttons with icons
##### Icons can be added to buttons and combined or not with text, as you can see in the examples below.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';
// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button variant="base" className="rainbow-m-around_medium">
            <FontAwesomeIcon icon={faCoffee} className="rainbow-m-right_medium" />
            Button base
        </Button>
        <Button variant="neutral" className="rainbow-m-around_medium">
            Button with right icon
            <FontAwesomeIcon icon={faCheck} className="rainbow-m-left_medium" />
        </Button>
        <Button variant="brand" className="rainbow-m-around_medium">
            Brand button with right icon
            <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
        </Button>
    </div>
```

# Buttons disabled
##### Buttons can be displayed as disabled. With the `disabled` prop, all the functionalities will be deactivated.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button disabled label="Button Base Disabled" className="rainbow-m-around_medium" />
        <Button
            disabled
            label="Button Neutral Disabled"
            variant="neutral"
            className="rainbow-m-around_medium"
        />
        <Button
            disabled
            label="Button Brand Disabled"
            variant="brand"
            className="rainbow-m-around_medium"
        />
    </div>
```

# Buttons inverse
##### If you want to use a button on a dark background, we suggest you implement the inverse variant.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';
// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

    <InverseContainer className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button label="Button Inverse" variant="inverse" className="rainbow-m-around_medium" />
        <Button variant="border-inverse" className="rainbow-m-around_medium">
            Button Inverse with icon
            <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
        </Button>
    </InverseContainer>
```

# Buttons with loading state
##### The loading state is build-in in the button. Use `isLoading` prop.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button
            isLoading
            label="Button Outline Brand"
            variant="outline-brand"
            className="rainbow-m-around_medium"
        />
        <Button
            isLoading
            label="Button Neutral"
            variant="neutral"
            className="rainbow-m-around_medium"
        />
        <Button isLoading label="Button Brand" variant="brand" className="rainbow-m-around_medium" />
    </div>
```

# Buttons of different sizes
##### If you need to resize your button, you can do so using the `size` prop.

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button variant="brand" label="Button Small" className="rainbow-m-around_medium" size='small'/>
        <Button label="Button Medium" variant="brand" className="rainbow-m-around_medium" size="medium"/>
        <Button label="Button Large" variant="brand" className="rainbow-m-around_medium" size='large'/>
    </div>
```
