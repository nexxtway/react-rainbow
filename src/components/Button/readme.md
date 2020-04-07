##### base buttons

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button variant="base" label="Button Base" className="rainbow-m-around_medium" />
        <Button label="Button Outline Brand" variant="outline-brand" className="rainbow-m-around_medium" />
        <Button label="Button Border" variant="border" className="rainbow-m-around_medium" />
</div>
```

##### simple buttons

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Button label="Button Neutral" variant="neutral" className="rainbow-m-around_medium" />
    <Button label="Button Border Filled" variant="border-filled" className="rainbow-m-around_medium" />
</div>
```

##### button variants

```js
import React from 'react';
import { Button } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
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

##### button shaded

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
        label="Button Success"
        onBlur={() => alert('blurred!')}
        variant="success"
        className="rainbow-m-around_medium"
    />
    <Button
        shaded
        label="Button Destructive"
        variant="destructive"
        className="rainbow-m-around_medium"
    />
</div>
```

##### buttons with icon

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

##### disabled buttons

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

##### buttons inverse

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

##### buttons loadings

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
