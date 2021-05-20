# RainbowThemeContainer
##### Use `RainbowThemeContainer` if you need to change the theme for a part of your application tree.

```js
import React from 'react';
import { Button, RainbowThemeContainer } from 'react-rainbow-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#5c56b6',
        },
    },
};

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_column">
        <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
            <Button variant="base" label="Button Base" className="rainbow-m-around_medium" />
            <Button label="Button Outline Brand" variant="outline-brand" className="rainbow-m-around_medium" />
            <Button label="Button Neutral" variant="neutral" className="rainbow-m-around_medium" />
            <Button
                label="Button Brand"
                onClick={() => alert('clicked!')}
                variant="brand"
                className="rainbow-m-around_medium"
            />
        </div>

        <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
            <RainbowThemeContainer theme={theme}>
                <Button variant="base" label="Button Base" className="rainbow-m-around_medium" />
                <Button label="Button Outline Brand" variant="outline-brand" className="rainbow-m-around_medium" />
                <Button label="Button Neutral" variant="neutral" className="rainbow-m-around_medium" />
                <Button
                    label="Button Brand"
                    onClick={() => alert('clicked!')}
                    variant="brand"
                    className="rainbow-m-around_medium"
                />
            </RainbowThemeContainer>
        </div>
    </div>
```
