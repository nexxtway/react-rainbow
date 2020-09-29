##### InternalUniversalPicker with one option selected

```js
import React, { useState } from 'react';
import { VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledOptionsContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;


const SimplePicker = () => {
    const [value, setValue] = useState('option-1');
    return (
        <StyledOptionsContainer>
            <InternalUniversalPicker value={value} onChange={setValue}>
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </InternalUniversalPicker>
        </StyledOptionsContainer>
    );
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <SimplePicker />
</div>
```

##### InternalUniversalPicker with multiple option selected

```js
import React, { useState } from 'react';
import { VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledOptionsContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;

const MultiplePicker = () => {
    const [value, setValue] = useState(['option-2']);
    return (
        <StyledOptionsContainer>
            <InternalUniversalPicker value={value} onChange={setValue} multiple>
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </InternalUniversalPicker>
        </StyledOptionsContainer>
    );
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <MultiplePicker />
</div>
```
