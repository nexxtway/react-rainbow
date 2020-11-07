##### Tooltip:

```js
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import { Button } from 'react-rainbow-components';
import showTooltip from '../../libs/showTooltip';

function Example() {
    const ref = useRef();
    const show = () => {
        showTooltip({ triggerElementRef: ref.current.htmlElementRef, content: (
            <p>
                123fsaddasd123fsaddasd123f
                <div>saddasd123fsaddasd123fsaddasd123fsaddas d123fsaddasd123fsaddasd123fsaddasd123fsaddasd1</div>
                <div>saddasd123fsaddasd123fsaddasd123fsaddas d123fsaddasd123fsaddasd123fsaddasd123fsaddasd1</div>
            </p>
        ) })
    }

    return (
        <div>
            <Button style={{ marginBottom: 800, marginTop: 800 }} label="asd" onClick={show} ref={ref} />
        </div>
    )
}

    <Example />

```
