# HighlightedText base
##### This example shows the style that is applied by default to the component.
```js
import React, { useState } from 'react';
import {  HighlightedText } from 'react-rainbow-components';

const style = {
    fontSize:"16px",
    maxWidth:"700px",
    textAlign:"center",
    padding:"20px",
    margin:"auto",
};

const parts = [
        {
          "value" : "Apples come in several ",
          "type" : "text"
        },
        {
          "value" : "varieties",
          "type" : "hit"
        },
        {
          "value" : ", including Fuji, Granny Smith, and Honeycrisp.",
          "type" : "text"
        }
];

<HighlightedText parts={parts} style={style}  />

```

# HighlightedText with custom styles
##### This example shows the component when custom styles are applied to it.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import {  HighlightedText } from 'react-rainbow-components';

const style = {
    fontSize:"16px",
    maxWidth:"700px",
    textAlign:"center",
    padding:"20px",
    margin:"auto",
};

const parts = [
        {
          "value" : "Apples come in several ",
          "type" : "text"
        },
        {
          "value" : "varieties",
          "type" : "hit"
        },
        {
          "value" : ", including Fuji, Granny Smith, and Honeycrisp.",
          "type" : "text"
        }
];

const TextContainer = styled.span`
    color: gray;
`;

const HitContainer = styled.span`
    background-color:  #00a3dc;
    color: #fff;
`;

<HighlightedText parts={parts} style={style} textComponent={TextContainer} hitComponent={HitContainer}/>

```

