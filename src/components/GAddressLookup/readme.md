##### GAddressLookup base

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GAddressLookup
            id="gaddresslookup-1"
            label="GAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
        />
    </div>

##### GAddressLookup disabled

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GAddressLookup
            id="gaddresslookup-2"
            label="GAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            disabled={true}
        />
    </div>
