# Badges variant
##### Badges change color according to the variant applied to them. You can use a lightest or outline brand for borders, or even change it for a default, inverse, brand, warning, success, or error variant that we provide you. 

```js
import React from 'react';
import { Badge } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge
        className="rainbow-m-around_medium"
        label="Lightest Badge"
        variant="lightest"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Outline Badge"
        variant="outline-brand"
        title="the badge title"
    />
    
    <Badge className="rainbow-m-around_medium" label="Default Badge" title="the badge title" />

    <Badge
        className="rainbow-m-around_medium"
        label="Inverse Badge"
        variant="inverse"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Brand Badge"
        variant="brand"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Warning Badge"
        variant="warning"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Success Badge"
        variant="success"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Error Badge"
        variant="error"
        title="the badge title"
    />
</div>
```
# Badges customization
##### If you need to further customize your badge, you can do so by applying the styles of your choice.

```js
import React from 'react';
import { Badge } from 'react-rainbow-components';

const signalStyles = {'color': 'white', 'backgroundColor': 'forestgreen', 'boxShadow': 'inset 0 0 0 1px'};
const floatingStyles = {'color': 'white', 'backgroundColor': 'lightsalmon', 'borderColor': 'darksalmon', 'boxShadow': 'gray 0 6px 16px -6px'};
const desertStyles = {'color': 'peru', 'backgroundColor': 'bisque'};

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge
        className="rainbow-m-around_medium"
        label="Signal Badge"
        title="the badge title"
        style={signalStyles}
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Floating Badge"
        title="the badge title"
        style={floatingStyles}
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Desert Badge"
        title="the badge title"
        style={desertStyles}
    />
</div>
```

# Badges with icons
##### Icons can be added to badges and combined or not with text, as you can see in the examples below.

```js
import React from 'react';
import { Badge } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge variant="inverse" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
        112 005
    </Badge>
    <Badge variant="lightest" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
        212 002
    </Badge>
    <Badge variant="lightest" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} size="lg" />
    </Badge>
</div>
```
