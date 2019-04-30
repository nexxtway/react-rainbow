##### Lookups base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCity } = require('@fortawesome/free-solid-svg-icons');

    const options = [
        { label: 'Paris', description: 'This is an awesome city', icon: <FontAwesomeIcon icon={faCity} /> },
        { label: 'New York', description: 'This is an awesome city' },
        { label: 'San Fransisco', description: 'This is an awesome city' },
        { label: 'Madrid', description: 'This is an awesome city' },
        { label: 'Miami' },
        { label: 'Londres', icon: <FontAwesomeIcon icon={faCity} /> },
        { label: 'Tokyo', description: 'This is an awesome city' },
        { label: 'Barcelona', description: 'This is an awesome city' },
        { label: 'La Habana', description: 'This is an awesome city' },
        { label: 'Buenos Aires' },
        { label: 'Sao Paulo' },
        { label: 'Toronto', description: 'This is an awesome city' },
    ];

    function filter(query, options) {
        return options.filter((item) => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }

    function search(value) {
        setState({
            isLoading: !!value,
            options: [],
        });
        setTimeout(() => setState({
            options: filter(value, options),
            isLoading: false,
        }), 1000);
    }

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={{ height: 300 }}>
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
