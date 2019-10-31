##### notification base

```js
import React from 'react';
import { Notification } from 'react-rainbow-components';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
    <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
        <Notification
            title="Notification title"
            description="This is the Notification description"
        />
    </div>
</div>
```

##### notification with icon

```js
import React from 'react';
import { Notification } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const iconContainerStyles = {
    width: '2rem',
    height: '2rem',
};

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
    <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
        <Notification
            title="Notification title"
            description="This is the Notification description"
            icon={
                <span
                    className="rainbow-background-color_purple rainbow-border-radius_circle rainbow-align-content_center"
                    style={iconContainerStyles}
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" className="rainbow-color_white" />
                </span>
            }
        />
    </div>
</div>
```

##### notification with icon variants

```js
import React from 'react';
import { Notification } from 'react-rainbow-components';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
    <div className="rainbow-p-right_small rainbow-flex rainbow-flex_column rainbow-align_end">
        <div className="rainbow-p-bottom_x-small">
            <Notification
                title="Notification with info icon"
                description="This notification can be used to display information about anything."
                icon="info"
            />
        </div>
        <div className="rainbow-p-bottom_x-small">
            <Notification
                title="Notification with success icon"
                description="This task was successfully completed."
                icon="success"
            />
        </div>
        <div className="rainbow-p-bottom_x-small">
            <Notification
                title="Notification with warning icon"
                description="This can be a risky situation."
                icon="warning"
            />
        </div>
        <Notification
            title="Notification with error icon"
            description="Alarm, there is a bug in the system."
            icon="error"
        />
    </div>
</div>
```
