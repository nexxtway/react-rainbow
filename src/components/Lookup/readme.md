##### Lookup base

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { label: 'Paris' },
    { label: 'New York' },
    { label: 'San Fransisco' },
    { label: 'Madrid' },
    { label: 'Miami' },
    { label: 'London' },
    { label: 'Tokyo' },
    { label: 'Barcelona' },
    { label: 'La Habana' },
    { label: 'Buenos Aires' },
    { label: 'Sao Paulo' },
    { label: 'Toronto' },
];

function filter(query, options) {
    if (query) {
        return options.filter(item => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }
    return [];
}

function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
        setState({
            options: filter(value, state.options),
            value,
        });
    } else if (value) {
        setState({
            value,
        });
        setState({
            options: filter(value, options),
            value,
        });
    } else {
        setState({
            value: '',
            options: null,
        });
    }
}

initialState = { options: null };

<Lookup
    id="lookup-1"
    label="Lookup Label"
    placeholder="Find"
    options={state.options}
    value={state.option}
    onChange={option => setState({ option })}
    onSearch={search}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Lookup small with icon and description

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

const IconStyles = {
    height: 30,
    width: 30,
    backgroundColor: '#01b6f5',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
};

const containerStyles = {
    maxWidth: 700,
};

const options = [
    {
        label: 'Paris',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'New York',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'San Fransisco',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Madrid',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Miami',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'London',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Tokyo',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Barcelona',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'La Habana',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Buenos Aires',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Sao Paulo',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
    {
        label: 'Toronto',
        description: 'This is an awesome city',
        icon: (
            <span style={IconStyles}>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
            </span>
        ),
    },
];

function filter(query, options) {
    if (query) {
        return options.filter(item => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }
    return [];
}

function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
        setState({
            options: filter(value, state.options),
            value,
        });
    } else if (value) {
        setState({
            isLoading: true,
            value,
        });
        setTimeout(
            () =>
                setState({
                    options: filter(value, options),
                    isLoading: false,
                }),
            500,
        );
    } else {
        setState({
            isLoading: false,
            value: '',
            options: null,
        });
    }
}

initialState = { options: null };

<Lookup
    id="lookup-3"
    label="Lookup Label"
    placeholder="Find"
    size="small"
    options={state.options}
    value={state.option}
    onChange={option => setState({ option })}
    debounce
    isLoading={state.isLoading}
    onSearch={search}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Lookup with options type section

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    {
        type: 'section',
        label: 'European Cities',
        options: [
            {
                label: 'Paris',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Madrid',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'London',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Barcelona',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
        ],
    },
    {
        type: 'section',
        label: 'American Cities',
        options: [
            {
                label: 'New York',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'San Fransisco',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Miami',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'La Habana',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Buenos Aires',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Sao Paulo',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
            {
                label: 'Toronto',
                icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
            },
        ],
    },
];

function filter(query, options) {
    if (query) {
        const filteredOptions = options.map(item => {
            if (item.type === 'section') {
                const sectionOptions = item.options.filter(item => {
                    const regex = new RegExp(query, 'i');
                    return regex.test(item.label);
                });
                if (sectionOptions.length) {
                    return {
                        ...item,
                        options: sectionOptions,
                    };
                }
                return null;
            }
            return item;
        });
        return filteredOptions.filter(item => !!item);
    }
    return [];
}

function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
        setState({
            options: filter(value, state.options),
            value,
        });
    } else if (value) {
        setState({
            isLoading: true,
            value,
        });
        setTimeout(
            () =>
                setState({
                    options: filter(value, options),
                    isLoading: false,
                }),
            500,
        );
    } else {
        setState({
            isLoading: false,
            value: '',
            options: null,
        });
    }
}

initialState = { options: null };

<Lookup
    id="lookup-5"
    label="Lookup Label"
    placeholder="Find"
    options={state.options}
    value={state.option}
    onChange={option => setState({ option })}
    debounce
    isLoading={state.isLoading}
    onSearch={search}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Lookup disabled

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { label: 'Paris' },
    { label: 'New York' },
    { label: 'San Fransisco' },
    { label: 'Madrid' },
    { label: 'Miami' },
    { label: 'London' },
    { label: 'Tokyo' },
    { label: 'Barcelona' },
    { label: 'La Habana' },
    { label: 'Buenos Aires' },
    { label: 'Sao Paulo' },
    { label: 'Toronto' },
];

function filter(query, options) {
    if (query) {
        return options.filter(item => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }
    return [];
}

function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
        setState({
            options: filter(value, state.options),
            value,
        });
    } else if (value) {
        setState({
            isLoading: true,
            value,
        });
        setTimeout(
            () =>
                setState({
                    options: filter(value, options),
                    isLoading: false,
                }),
            500,
        );
    } else {
        setState({
            isLoading: false,
            value: '',
            options: null,
        });
    }
}

initialState = { options: null };

<Lookup
    label="Lookup Label"
    placeholder="Find"
    options={state.options}
    value={state.option}
    onChange={option => setState({ option })}
    disabled
    isLoading={state.isLoading}
    onSearch={search}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Lookup required with error

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { label: 'Paris' },
    { label: 'New York' },
    { label: 'San Fransisco' },
    { label: 'Madrid' },
    { label: 'Miami' },
    { label: 'London' },
    { label: 'Tokyo' },
    { label: 'Barcelona' },
    { label: 'La Habana' },
    { label: 'Buenos Aires' },
    { label: 'Sao Paulo' },
    { label: 'Toronto' },
];

function filter(query, options) {
    if (query) {
        return options.filter(item => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }
    return [];
}

function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
        setState({
            options: filter(value, state.options),
            value,
        });
    } else if (value) {
        setState({
            isLoading: true,
            value,
        });
        setTimeout(
            () =>
                setState({
                    options: filter(value, options),
                    isLoading: false,
                }),
            500,
        );
    } else {
        setState({
            isLoading: false,
            value: '',
            options: null,
        });
    }
}

initialState = { options: null };

<Lookup
    label="Lookup Label"
    placeholder="Find"
    options={state.options}
    value={state.option}
    onChange={option => setState({ option })}
    required
    error="This field is required"
    isLoading={state.isLoading}
    onSearch={search}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Lookup with value selected

```js
import React from 'react';
import { Lookup } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const inputStyles = {
    width: 300,
};

<div className="rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap">
    <Lookup
        className="rainbow-p-around_medium"
        style={inputStyles}
        label="Place of Birth"
        value={{
            label: 'London',
            icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
        }}
    />

    <Lookup
        className="rainbow-p-around_medium"
        style={inputStyles}
        label="Place of Birth"
        readOnly
        value={{
            label: 'London',
            icon: <FontAwesomeIcon icon={faBuilding} className="rainbow-color_brand" />,
        }}
    />
</div>
```
