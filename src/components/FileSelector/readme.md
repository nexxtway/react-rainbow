##### FileSelector inline

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Select only one file"
                onChange={handleChange}
            />
        </div>
    );
}

<FileSelectorExample />
```

##### FileSelector inline with multiple selections

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector multiple"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Can select multiple files"
                multiple
            />
        </div>
    );
}

<FileSelectorExample />
```


##### FileSelector inline disabled

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector disabled"
                placeholder="Drag & Drop or Click to Browse"
                disabled
            />
        </div>
    );
}

<FileSelectorExample />
```


##### FileSelector inline with error

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector with error"
                placeholder="Drag & Drop or Click to Browse"
                error="File type not supported"
            />
        </div>
    );
}

<FileSelectorExample />
```

##### FileSelector multiline

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Select only one file"
                variant="multiline"
                onChange={handleChange}
            />
        </div>
    );
}

<FileSelectorExample />
```

##### FileSelector multiline with multiple selections

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector multiple"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Can select multiple files"
                variant="multiline"
                multiple
            />
        </div>
    );
}

<FileSelectorExample />
```

##### FileSelector multiline disabled

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector 
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles} 
                label="File selector with error" 
                placeholder="Drag & Drop or Click to Browse"
                variant="multiline"
                disabled
            />
        </div>
    );
}

<FileSelectorExample />
```


##### FileSelector multiline with error

```js
import React, { useState } from 'react';
import { FileSelector } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 300,
};

function FileSelectorExample(props) {
    const [files, setFiles] = useState([]);

    const handleChange = files => {
        setFiles(files);
    }

    return (
        <div>
            <FileSelector 
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles} 
                label="File selector with error" 
                placeholder="Drag & Drop or Click to Browse"
                error="File type not supported"
                variant="multiline"
            />
        </div>
    );
}

<FileSelectorExample />
```
