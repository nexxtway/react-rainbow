# The basic TimelineMarker
##### This example represents a TimelineMarker with a simple style and functionality. As you can see in the code section, you can add some information using the properties `label`, `icon`, `datetime`, and  `description`.

```js
import React from 'react';
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };

    <div className="rainbow-m-around_xx-large">
        <ActivityTimeline>
            <TimelineMarker
                label="User Sign Up."
                icon={<UserSignUpIcon style={iconStyles} />}
                datetime="Yesterday"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
            />
        </ActivityTimeline>
    </div>
```

# TimelineMarker with image
##### In addition to the descriptive information of the item in the TimelineMarker, you can add an image, as you can see in the example below.

```js
import React from 'react';
import { ActivityTimeline, TimelineMarker, Card } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };

    <div className="rainbow-m-around_xx-large">
        <ActivityTimeline>
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
        </ActivityTimeline>
    </div>
```
