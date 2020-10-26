##### HelpText info

```js
import React from 'react';
import styled from 'styled-components'
import { HelpText } from 'react-rainbow-components';

const style = { width: '250px' };

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
`;

    <Container>
        <HelpText
            title="Message Title"
            text={<p style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>}
        />
    </Container>
```

##### HelpText error

```js
import React from 'react';
import styled from 'styled-components'
import { HelpText } from 'react-rainbow-components';

const style = { width: '250px' };

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
`;

    <Container>
        <HelpText
            variant="error"
            title="Message Title"
            text={<p style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>}
        />
    </Container>
```

##### HelpText warning

```js
import React from 'react';
import styled from 'styled-components'
import { HelpText } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
`;

const style = { width: '250px' };

    <Container>
        <HelpText
            variant="warning"
            title="Message Title"
            text={<p style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>}
        />
    </Container>
```

##### HelpText question

```js
import React from 'react';
import styled from 'styled-components'
import { HelpText } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
`;

const style = { width: '250px' };

    <Container>
        <HelpText
            variant="question"
            title="Message Title"
            text={<p style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>}
        />
    </Container>
```
