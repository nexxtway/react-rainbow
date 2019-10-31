##### TimeLineMarker base:

```js
import React from 'react';
import { TimelineMarker } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };
<div className="rainbow-m-around_xx-large">
    <TimelineMarker
        label="User Sign Up."
        icon={<UserSignUpIcon style={iconStyles} />}
        datetime="Yesterday"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
    />
</div>
```

##### TimeLineMarker with content and description:

```js
import React from 'react';
import { TimelineMarker, Card } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };
<div className="rainbow-m-around_xx-large">
    <TimelineMarker
        label="User first post."
        icon={<UserFirstPostIcon style={iconStyles} />}
        datetime="3 hours ago"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmodtempor incidunt ut labore et dolore magna aliqua."
    >
        <Card title="Inside Content">
            <img
                src="images/illustrations/Illustration-chef.svg"
                className="rainbow-m_auto rainbow-align-content_center"
                alt="landscape with rainbows, birds and colorful balloons"
            />
        </Card>
    </TimelineMarker>
</div>
```
