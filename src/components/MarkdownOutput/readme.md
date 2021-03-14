# MarkdownOutput base
##### MarkdownOutput allows to parse Markdown text and render as HTML. In the example below you can see the basic elements.
```js
import React from 'react';
import styled from 'styled-components';
import { Card, MarkdownOutput } from 'react-rainbow-components';

const StyledCard = styled(Card)`
    padding: 1rem 2rem;
    box-shadow: none;

    &:hover {
        box-shadow: none;
    }
`;

const StyledHeading = styled.h1`
    font-size: 1.25rem;
    color: #2A3039;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
`;

const headings = "# # Heading level 1\n ## ## Heading level 2\n ### ### Heading level 3\n #### #### Heading level 4\n ##### ##### Heading level 5\n ###### ###### Heading level 6";
const paragraph = "I think I'll use it to format all of my documents from now on."
const bold = "I just love **&#42;&#42;bold text&#42;&#42;**.	";
const italic = "Italicized text is the *&#42;cat's meow&#42;*."
const link = "React Rainbow is a collection of components that will reliably help you build your application in a snap. [[Link](http://react-rainbow.io)](http://react-rainbow.io) Give it a hack and let us know what you think.";
const blockquotes = "> To create a blockquote, add a > in front of a paragraph.";
const orderedList = "1. First item\n 2. Second item\n 3. Third item\n 4. Fourth item";
const nestedOrderedList = "1. First item\n 2. Second item\n 3. Third item\n     1. First item\n     2. Second item\n 4. Fourth item";
const unorderedList = "- First item\n - Second item\n - Third item\n - Fourth item";
const nestedUnorderedList = "- First item\n - Second item\n - Third item\n     - First item\n     - Second item\n - Fourth item";
const taskList = "- [x] First item\n - [ ] Second item\n - [ ] Third item\n - [ ] Fourth item\n ";
const table = "| FirstName | LastName | Email |\n| ----------- | ----------- | ----------- |\n| Juan      | Perez       | juan@gmail.com |\n| Juan   | Perez        | juan@gmail.com |\n";

const MarkdownEditor = () => {
    return (
        <div className="rainbow-m-vertical_large rainbow-p-horizontal_large rainbow-m_auto rainbow-flex_wrap">
            <StyledHeading>Headings</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={headings} />
            </StyledCard>
            <StyledHeading>Paragraph</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={paragraph} />
            </StyledCard>
            <StyledHeading>Bold</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={bold} />
            </StyledCard>
            <StyledHeading>Italic</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={italic} />
            </StyledCard>
            <StyledHeading>Link</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={link} />
            </StyledCard>
            <StyledHeading>Blockquotes</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={blockquotes} />
            </StyledCard>
            <StyledHeading>Ordered list</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={orderedList} />
                <br />
                <MarkdownOutput value={nestedOrderedList} />
            </StyledCard>
            <StyledHeading>Unordered list</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={unorderedList} />
                <br />
                <MarkdownOutput value={nestedUnorderedList} />
            </StyledCard>
            <StyledHeading>Task list</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={taskList} />
            </StyledCard>
            <StyledHeading>Table</StyledHeading>
            <StyledCard>
                <MarkdownOutput value={table} />
            </StyledCard>
        </div>
    )
}

    <MarkdownEditor />
```

# Markdown editor:
##### The following example allows to edit the Markdown content and see the result. Toggle between Edit and Preview to see it in action.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, RadioButtonGroup, Textarea, MarkdownOutput } from 'react-rainbow-components';

const markdownString = '# Markdown Example\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n## Divider\n- - -\n## Code highlight\n### Javascript code\n```js\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n**note**: `doSomenthing` is a method that just do nothing.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua `code example` is a method that just do nothing.\n\n## Tables\n| Syntax      | Description |\n| ----------- | ----------- |\n| Header      | Title       |\n| Paragraph   | Text        |\n\n## Lists\n### Basic list\n- Item #1\n- Item #2\n- Item #3\n### Ordered list\n1. Item #1\n2. Item #2\n3. Item #3\n### Tasks list\n- [x] Task #1\n- [ ] Task #2\n- [ ] Task #3\n\n## Links\nThis is [an example](http://example.com/ "Title") inline link.\n## Images\n[image1]: https://react-rainbow.io/0b7340ef91b62a1c44f9193ea2fdbe53.svg "Image Title"\n![Alt text][image1]\n### References\nA reference to an [image](#image1).';

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
    const { mode, options, onModeChange } = props;

    const handleChange = event => {
        onModeChange(event.target.value);
    };

    return (
        <RadioButtonGroup
            variant="brand"
            value={mode}
            options={options}
            onChange={handleChange}
            size="small"
        />
    );
};

const MarkdownCard = () => {
    const [mode, setMode] = useState('preview');
    const [text, setText] = useState(markdownString);

    const content = mode === 'edit'
        ? <Textarea value={text} rows={15} onChange={event => setText(event.target.value)}/>
        : <MarkdownOutput id="markdown-output-1" value={text} />

    return (
        <StyledCard
                actions={
                    <ToggleMode
                        mode={mode}
                        options={[
                            {
                                label: 'Edit',
                                value: 'edit',
                            },
                            {
                                label: 'Preview',
                                value: 'preview',
                            }
                        ]}
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
            <MarkdownCard />
        </HighlightTheme>
    </div>
```

# MarkdownOutput with code blocks:
##### You can render code snippets in multiple languages, including syntax highlighting with `highlight.js`.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, RadioButtonGroup, Textarea, MarkdownOutput } from 'react-rainbow-components';

const markdownString = '# Code examples\n ### Standard \n```\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Javascript \n```js\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Shell \n```sh\n$ node index.js;\n```\n\n ### Java \n ```java\n String foo = 5;\n```';

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
    const { mode, options, onModeChange } = props;

    const handleChange = event => {
        onModeChange(event.target.value);
    };

    return (
        <RadioButtonGroup
            variant="brand"
            value={mode}
            options={options}
            onChange={handleChange}
            size="small"
        />
    );
};

const MarkdownCard = () => {
    const [mode, setMode] = useState('preview');
    const [text, setText] = useState(markdownString);

    const content = mode === 'edit'
        ? <Textarea value={text} rows={15} onChange={event => setText(event.target.value)}/>
        : <MarkdownOutput id="markdown-output-1" value={text} />

    return (
        <StyledCard
                actions={
                    <ToggleMode
                        mode={mode}
                        options={[
                            {
                                label: 'Edit',
                                value: 'edit',
                            },
                            {
                                label: 'Preview',
                                value: 'preview',
                            }
                        ]}
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
            <MarkdownCard />
        </HighlightTheme>
    </div>
```

# MarkdownOutput with code blocks with Dracula `highlight.js` theme:
##### The example below shows how to apply a theme to your code blocks.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import 'highlight.js/styles/dracula.css';
import { Card, RadioButtonGroup, Textarea, MarkdownOutput } from 'react-rainbow-components';

const markdownString = '# Code examples\n ### Standard \n```\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Javascript \n```js\nconst data = \'Lorem ipsum....\';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Shell \n```sh\n$ node index.js;\n```\n\n ### Java \n ```java\n String foo = 5;\n```';

const StyledCard = styled(Card)`
    padding: 1rem 2rem 2rem;
`;

const ToggleMode = props => {
    const { mode, options, onModeChange } = props;

    const handleChange = event => {
        onModeChange(event.target.value);
    };

    return (
        <RadioButtonGroup
            variant="brand"
            value={mode}
            options={options}
            onChange={handleChange}
            size="small"
        />
    );
};

const MarkdownCard = () => {
    const [mode, setMode] = useState('preview');
    const [text, setText] = useState(markdownString);

    const content = mode === 'edit'
        ? <Textarea value={text} rows={15} onChange={event => setText(event.target.value)}/>
        : <MarkdownOutput id="markdown-output-1" value={text} />

    return (
        <StyledCard
                actions={
                    <ToggleMode
                        mode={mode}
                        options={[
                            {
                                label: 'Edit',
                                value: 'edit',
                            },
                            {
                                label: 'Preview',
                                value: 'preview',
                            }
                        ]}
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
        <MarkdownCard />
    </div>
```
