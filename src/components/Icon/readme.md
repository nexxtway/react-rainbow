##### Icon with size variants

```js
import React from 'react';
import { Icon } from 'react-rainbow-components';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-around_large">
    <div className="rainbow-p-around_medium">
        <Icon icon={faCircle} />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">
            Brand
        </span>
    </div>
    <div className="rainbow-p-around_medium">
        <Icon variant="success" icon={faCircle} />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">Success</span>
    </div>
    <div className="rainbow-p-around_medium">
        <Icon variant="warning" icon={faCircle} />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">
            Warning
        </span>
    </div>
    <div className="rainbow-p-around_medium">
        <Icon variant="error" icon={faCircle} />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">Error</span>
    </div>
</div>
```