Basic example:

    const styles = {
        height: 565,
        width: 400,
        margin: 'auto',
    };

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <div className="rainbow-p-top_x-large rainbow-p-bottom_x-large" style={styles}>
            <GMap apiKey="AIzaSyCEDLRYSNn3mI1AwFjz-kYJ5ZIqmMyhphg" zoom={10} latitude={-33.836538} longitude={151.127900} header="Title">
                <MapMarker latitude={-33.941264} longitude={151.2042969} />
                <MapMarker latitude={-33.940004} longitude={151.094593} />
                <MapMarker latitude={-33.758782} longitude={151.048745} />
            </GMap>
        </div>
    </div>
