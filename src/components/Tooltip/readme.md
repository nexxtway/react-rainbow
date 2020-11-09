##### Tooltip:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { Button, Tooltip } from 'react-rainbow-components';
import { useOutsideClick } from '../../libs/hooks';
import { WindowScrolling } from '../../libs/scrollController';

function Example() {
    const ref = useRef();
    const tooltipRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        tooltipRef,
        () => {
            setIsOpen(false);
        },
        isOpen,
    );

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        setIsOpen(false);
    });

    const show = () => {
        // setIsOpen(true);
        setIsOpen(true);
    }

    return (
        <div>
            <Button style={{ marginBottom: 800, marginTop: 800 }} label="asd" onClick={show} ref={ref} />
            <Tooltip triggerElementRef={() => ref.current.htmlElementRef} isVisible={isOpen} ref={tooltipRef}>
                <p>
                    123fsaddasd123fsaddasd123f
                    <div>saddasd123fsaddasd123fsaddasd123fsaddas d123fsaddasd123fsaddasd123fsaddasd123fsaddasd1</div>
                    <div>saddasd123fsaddasd123fsaddasd123fsaddas d123fsaddasd123fsaddasd123fsaddasd123fsaddasd1</div>
                </p>
            </Tooltip>
        </div>
    )
}

    <Example />

```
