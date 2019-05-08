##### Lookup base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

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
            return options.filter((item) => {
                const regex = new RegExp(query, 'i');
                return regex.test(item.label);
            });
        }
        return [];
    }

    function search(value) {
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setState({
                options: filter(value, options),
                isLoading: false,
            });
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            id="lookup-1"
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            isLoading={state.isLoading}
            onSearch={search} />
    </div>

##### Lookup with icon:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

    const options = [
        { label: 'Paris', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'New York', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'San Fransisco', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Madrid', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Miami', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'London', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Tokyo', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Barcelona', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'La Habana', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Buenos Aires', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Sao Paulo', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
        { label: 'Toronto', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
    ];

    function filter(query, options) {
        if (query) {
            return options.filter((item) => {
                const regex = new RegExp(query, 'i');
                return regex.test(item.label);
            });
        }
        return [];
    }

    function search(value) {
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setTimeout(() => setState({
                options: filter(value, options),
                isLoading: false,
            }), 500);
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            debounce
            isLoading={state.isLoading}
            onSearch={search} />
    </div>

##### Lookup with icon and description:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

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

    const options = [
        {
            label: 'Paris',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'New York',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'San Fransisco',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Madrid',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Miami',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'London',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Tokyo',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Barcelona',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'La Habana',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Buenos Aires',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Sao Paulo',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
        {
            label: 'Toronto',
            description: 'This is an awesome city',
            icon: <span style={IconStyles}> <FontAwesomeIcon icon={faCity} /> </span>
        },
    ];

    function filter(query, options) {
        if (query) {
            return options.filter((item) => {
                const regex = new RegExp(query, 'i');
                return regex.test(item.label);
            });
        }
        return [];
    }

    function search(value) {
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setTimeout(() => setState({
                options: filter(value, options),
                isLoading: false,
            }), 500);
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            debounce
            isLoading={state.isLoading}
            onSearch={search} />
    </div>

##### Lookup with options type section:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

    const options = [
        {
            type: 'section',
            label: 'European Cities',
            options: [
                { label: 'Paris', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Madrid', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'London', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Barcelona', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
            ],
        },
        {
            type: 'section',
            label: 'American Cities',
            options: [
                { label: 'New York', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'San Fransisco', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Miami', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'La Habana', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Buenos Aires', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Sao Paulo', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
                { label: 'Toronto', icon: <FontAwesomeIcon icon={faCity} className="rainbow-color_brand" /> },
            ],
        }
    ];

    function filter(query, options) {
        if (query) {
            const filteredOptions = options.map((item) => {
                if (item.type === 'section') {
                    const sectionOptions = item.options.filter((item) => {
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
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setTimeout(() => setState({
                options: filter(value, options),
                isLoading: false,
            }), 500);
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            id="lookup-7"
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            debounce
            isLoading={state.isLoading}
            onSearch={search} />
    </div>

##### Lookup disabled:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

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
            return options.filter((item) => {
                const regex = new RegExp(query, 'i');
                return regex.test(item.label);
            });
        }
        return [];
    }

    function search(value) {
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setTimeout(() => setState({
                options: filter(value, options),
                isLoading: false,
            }), 500);
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            disabled
            isLoading={state.isLoading}
            onSearch={search} />
    </div>

##### Lookup required with error:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

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
            return options.filter((item) => {
                const regex = new RegExp(query, 'i');
                return regex.test(item.label);
            });
        }
        return [];
    }

    function search(value) {
        if (state.options && state.value && (value.length > state.value.length)) {
            setState({
                options: filter(value, state.options),
                value,
            });
        } else if (value) {
            setState({
                isLoading: true,
                value,
            });
            setTimeout(() => setState({
                options: filter(value, options),
                isLoading: false,
            }), 500);
        } else {
            setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    initialState = { options: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Lookup
            label="Lookup Label"
            placeholder="Find"
            options={state.options}
            value={state.option}
            onChange={(option) => setState({ option })}
            required
            error="This field is required"
            isLoading={state.isLoading}
            onSearch={search} />
    </div>
