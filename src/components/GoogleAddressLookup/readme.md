##### GoogleAddressLookup base

    initialState = { value: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <GoogleAddressLookup
            id="gaddresslookup-1"
            label="GoogleAddressLookup label"
            onChange={(value) => setState({ value })}
            value={state.value}
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
        />
    </div>

##### GoogleAddressLookup disabled

    initialState = { value: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <GoogleAddressLookup
            id="gaddresslookup-2"
            label="GoogleAddressLookup label"
            onChange={(value) => setState({ value })}
            value={state.value}
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            disabled
        />
    </div>

##### GoogleAddressLookup with custom search params (bounds, types)

    initialState = { value: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <GoogleAddressLookup
            id="gaddresslookup-3"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            onChange={(value) => setState({ value })}
            value={state.value}
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            searchOptions={{
                bounds: {
                    sw: {
                        latitude: -63.941264,
                        longitude: 151.2042969,
                    },
                    ne: {
                        latitude: 63.941264,
                        longitude: -151.2042969,
                    },
                },
                types: ['address'],
            }}
        />
    </div>

##### GoogleAddressLookup with custom search params (location, radius, types, country)

    initialState = { value: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <GoogleAddressLookup
            id="gaddresslookup-4"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            onChange={(value) => setState({ value })}
            value={state.value}
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            searchOptions={{
                location: {
                    latitude: -33.941264,
                    longitude: 151.2042969,
                },
                country: 'us',
                radius: 150000,
                types: ['address'],
            }}
        />
    </div>

##### GoogleAddressLookup required with error

    initialState = { value: null };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <GoogleAddressLookup
            id="gaddresslookup-5"
            required
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            onChange={(value) => setState({ value })}
            value={state.value}
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            error="This field is required"
        />
    </div>
