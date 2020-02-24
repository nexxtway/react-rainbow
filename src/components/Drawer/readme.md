##### Drawer example:

```js
import React from 'react';
import { Button, Drawer } from 'react-rainbow-components';

const initialState = {
    drawerPosition: undefined,
    isOpen: false,
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
>
    <div className="rainbow-align-content_center rainbow-p-medium">
        <Button
            className="rainbow-m-around_medium"
            label="Open Top"
            onClick={() => setState({
                drawerPosition: 'top',
                isOpen: true,
            })}
        />
    </div>
    <div className="rainbow-flex rainbow-flex_row">
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
            <Button
                className="rainbow-m-around_medium"
                label="Open Left"
                onClick={() => {}}
                onClick={() => setState({
                    drawerPosition: 'left',
                    isOpen: true,
                })}
            />
        </div>
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
            <Button
                className="rainbow-m-around_medium"
                label="Open Right"
                onClick={() => setState({
                    drawerPosition: 'right',
                    isOpen: true,
                })}
            />
        </div>
    </div>
    <div className="rainbow-align-content_center rainbow-p-medium">
        <Button
            className="rainbow-m-around_medium"
            label="Open Bottom"
            onClick={() => setState({
                drawerPosition: 'bottom',
                isOpen: true,
            })}
        />
    </div>
    <Drawer
        header="This is a drawer"
        isOpen={state.isOpen}
        slideFrom={state.drawerPosition}
        onRequestClose={() => setState({ isOpen : false })}
    />
</div>
```
