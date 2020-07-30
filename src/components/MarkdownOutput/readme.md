##### MarkdownOutput base:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, RadioButtonGroup, Textarea, MarkdownOutput } from 'react-rainbow-components';

initialState = {
    text: '# Markdown Example\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n## Divider\n- - -\n## Code highlight\n### Javascript code\n```js\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n**note**: `doSomenthing` is a method that just do nothing.\n\n## Tables\n| Syntax      | Description |\n| ----------- | ----------- |\n| Header      | Title       |\n| Paragraph   | Text        |\n\n## Lists\n### Basic list\n- Item #1\n- Item #2\n- Item #3\n### Ordered list\n1. Item #1\n2. Item #2\n3. Item #3\n### Tasks list\n- [x] Task #1\n- [ ] Task #2\n- [ ] Task #3\n\n## Links\nThis is [an example](http://example.com/ "Title") inline link.\n## Images\n[image1]: https://react-rainbow.io/0b7340ef91b62a1c44f9193ea2fdbe53.svg "Image Title"\n![Alt text][image1]\n### References\nA reference to an [image](#image1).',
};

const StyledCard = styled(Card)`
    padding: 1rem 2rem 2rem;
`;

const HighlightTheme = styled.div.attrs(props => props.theme.rainbow)`
    .hljs {
        background: ${props => props.palette.background.highlight};
        color: ${props => props.palette.text.main};
    }

    .hljs-comment,
    .hljs-meta {
        color: #969896;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-strong,
    .hljs-emphasis,
    .hljs-quote {
        color: #df5000;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-type {
        color: #d73a49;
    }

    .hljs-literal,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-attribute {
        color: #0086b3;
    }

    .hljs-section,
    .hljs-name {
        color: #63a35c;
    }

    .hljs-tag {
        color: #333333;
    }

    .hljs-title,
    .hljs-attr,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #6f42c1;
    }

    .hljs-addition {
        color: #55a532;
        background-color: #eaffea;
    }

    .hljs-deletion {
        color: #bd2c00;
        background-color: #ffecec;
    }

    .hljs-link {
        text-decoration: underline;
    }

    .hljs-number {
        color: #005cc5;
    }

    .hljs-string {
        color: #032f62;
    }
`;

const ToggleMode = props => {
    const [mode, setMode] = useState(props.mode);

    const handleChange = event => {
        setMode(event.target.value);
        props.onModeChange(event.target.value);
    };

    return (
        <RadioButtonGroup
            variant="brand"
            value={mode}
            options={props.options}
            onChange={handleChange}
            size="small"
        />
    );
};

const MarkdownCard = props => {
    const [mode, setMode] = useState('preview');
    const [text, setText] = useState(props.text);

    const content = mode === 'edit'
        ? <Textarea value={text} rows={15} onChange={event => setText(event.target.value)}/>
        : <MarkdownOutput id="markdown-output-1" value={text} />

    return (
        <StyledCard
            actions={
                <ToggleMode
                    mode={mode}
                    options={[{
                        label: 'Edit',
                        value: 'edit',
                    }, {
                        label: 'Preview',
                        value: 'preview',
                    }]}
                    onModeChange={value => setMode(value)}
                />
            }
        >
            {content}
        </StyledCard>
    );
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_large rainbow-m_auto rainbow-flex_wrap"
>
        <HighlightTheme>
            <MarkdownCard text={state.text} />
        </HighlightTheme>
    </div>
```

##### MarkdownOutput code:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, RadioButtonGroup, Textarea, MarkdownOutput } from 'react-rainbow-components';

initialState = {
    text: '# Code examples\n ### Standard \n```\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Javascript \n```js\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Shell \n```sh\n$ node index.js;\n```\n\n ### Java \n ```java\n String foo = 5;\n```',
};

const StyledCard = styled(Card)`
    padding: 1rem 2rem 2rem;
`;

const HighlightTheme = styled.div.attrs(props => props.theme.rainbow)`
    .hljs {
        background: ${props => props.palette.background.highlight};
        color: ${props => props.palette.text.main};
    }

    .hljs-comment,
    .hljs-meta {
        color: #969896;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-strong,
    .hljs-emphasis,
    .hljs-quote {
        color: #df5000;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-type {
        color: #d73a49;
    }

    .hljs-literal,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-attribute {
        color: #0086b3;
    }

    .hljs-section,
    .hljs-name {
        color: #63a35c;
    }

    .hljs-tag {
        color: #333333;
    }

    .hljs-title,
    .hljs-attr,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #6f42c1;
    }

    .hljs-addition {
        color: #55a532;
        background-color: #eaffea;
    }

    .hljs-deletion {
        color: #bd2c00;
        background-color: #ffecec;
    }

    .hljs-link {
        text-decoration: underline;
    }

    .hljs-number {
        color: #005cc5;
    }

    .hljs-string {
        color: #032f62;
    }
`;

const ToggleMode = props => {
    const [mode, setMode] = useState(props.mode);

    const handleChange = event => {
        setMode(event.target.value);
        props.onModeChange(event.target.value);
    };

    return (
        <RadioButtonGroup
            variant="brand"
            value={mode}
            options={props.options}
            onChange={handleChange}
            size="small"
        />
    );
};

const MarkdownCard = props => {
    const [mode, setMode] = useState('preview');
    const [text, setText] = useState(props.text);

    const content = mode === 'edit'
        ? <Textarea value={text} rows={15} onChange={event => setText(event.target.value)}/>
        : <MarkdownOutput id="markdown-output-1" value={text} />

    return (
        <StyledCard
            actions={
                <ToggleMode
                    mode={mode}
                    options={[{
                        label: 'Edit',
                        value: 'edit',
                    }, {
                        label: 'Preview',
                        value: 'preview',
                    }]}
                    onModeChange={value => setMode(value)}
                />
            }
        >
            {content}
        </StyledCard>
    );
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_large rainbow-m_auto rainbow-flex_wrap"
>
    <HighlightTheme>
        <MarkdownCard text={state.text} />
    </HighlightTheme>
    </div>
```
