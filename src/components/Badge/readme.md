##### badges border

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
</div>
```

##### badges variant

```js
import React from 'react';
import { Badge } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
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
##### badges custom variant

```js
import React from 'react';
import { Badge } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge
        className="rainbow-m-around_medium"
        label="Signal Badge"
        title="the badge title"
        style={{'color': 'white', 'backgroundColor': 'forestgreen', 'boxShadow': 'inset 0 0 0 1px'}}
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Floating Badge"
        title="the badge title"
        style={{'color': 'white', 'backgroundColor': 'lightsalmon', 'borderColor': 'darksalmon', 'boxShadow': 'gray 0 6px 16px -6px'}}
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Desert Badge"
        title="the badge title"
        style={{'color': 'peru', 'backgroundColor': 'bisque',}}
    />
</div>
```

##### badges with icons

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
