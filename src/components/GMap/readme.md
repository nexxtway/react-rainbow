map base:

    const styles = {
        width: 400,
        margin: 'auto',
    };

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <div className="rainbow-p-top_x-large rainbow-p-bottom_x-large" style={styles}>
            <GMap apiKey={REACT_APP_GOOGLE_MAPS_APIKEY} zoom={10} latitude={-33.836538} longitude={151.127900} header="Title">

                <MapMarker
                    latitude={-33.941264}
                    longitude={151.2042969}
                    label="Botany Bay"
                    description=" Botany, New South Wales, Australia" />

                <MapMarker
                    latitude={-33.940004}
                    longitude={151.094593}
                    label="Garema"
                    description="Garema Circuit, Kingsgrove, Australia" />
            </GMap>
        </div>
    </div>

map inside a card:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faMap } = require('@fortawesome/free-regular-svg-icons');

    const iconContainerStyles = {
        backgroundColor: '#5c56b6',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '2.125rem',
        width: '2.125rem',
    };
    const ICON = (
        <span style={iconContainerStyles}>
            <FontAwesomeIcon color="white" icon={faMap} />
        </span>
    );

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <Card className="rainbow-m-around_x-large" title="Map" icon={ICON}>
            <GMap apiKey={REACT_APP_GOOGLE_MAPS_APIKEY} zoom={10} latitude={-33.836538} longitude={151.127900}>
                <MapMarker
                    latitude={-33.941264}
                    longitude={151.2042969}
                    label="Botany Bay"
                    description=" Botany, New South Wales, Australia" />

                <MapMarker
                    latitude={-33.940004}
                    longitude={151.094593}
                    label="Garema"
                    description="Garema Circuit, Kingsgrove, Australia" />
            </GMap>
        </Card>
    </div>
