Basic example:

    const styles = {
        height: 565,
        width: 400,
        margin: 'auto',
    };

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <div className="rainbow-p-top_x-large rainbow-p-bottom_x-large" style={styles}>
            <GMap apiKey={REACT_APP_GOOGLE_MAPS_APIKEY} zoom={10} latitude={-33.836538} longitude={151.127900} header="Title">

                <MapMarker
                    latitude={-33.940004}
                    longitude={151.094593}
                    label="Garema"
                    description="Garema Circuit, Kingsgrove, Australia" />

                <MapMarker
                    latitude={-33.941264}
                    longitude={151.2042969}
                    label="Botany Bay"
                    description=" Botany, New South Wales, Australia" />
            </GMap>
        </div>
    </div>
