##### list loading using spinner - base - large

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div className="rainbow-p-vertical_xx-large">
        <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
        </div>
    </div>
</div>
```

##### full screen loading using spinner - brand - medium

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';
import styled from 'styled-components';

const Loading = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.brand.main};
`;

<div
    className="rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large"
>
    <Spinner variant="brand" size="medium" />
    <Loading className="rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">
        Loading…
    </Loading>
</div>
```

##### lazy loading using spinner - neutral - small

```js
import React from 'react';
import { Spinner, Card, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Loading = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
`;

const spinner = (
    <div className="rainbow-align-content_center">
        <div className="rainbow-position_relative">
            <Spinner size="small" variant="neutral" />
        </div>
        <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            Loading…
        </h1>
    </div>
);
const Icon = styled.div.attrs(props => { 
    const palette = props.theme.rainbow.palette;
    const brandMainColor = palette.brand.main;
    const brandMainContrastText = palette.getContrastText(brandMainColor);

    return {
        brandMainColor,
        brandMainContrastText,
    };
})`
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.brandMainColor};
    color: ${props => props.brandMainContrastText};
`;
<div className="rainbow-p-vertical_large rainbow-p-horizontal_large">
    <Card
        icon={
            <Icon
                className="rainbow-border-radius_circle rainbow-align-content_center">
                <FontAwesomeIcon icon={faTasks} size="lg" />
            </Icon>
        }
        title="Task"
        footer={spinner}
        actions={<Button variant="neutral" label="Add" />}
    >
        <div className="rainbow-p-vertical_xx-large" />
    </Card>
</div>
```

##### full screen loading using spinner - inverse - medium

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';
import styled from 'styled-components';

const Loading = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.getContrastText(props.text.main)};
`;

<InverseContainer className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Spinner variant="inverse" size="medium" />
    <Loading
        className="rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">
        Loading…
    </Loading>
</InverseContainer>
```
