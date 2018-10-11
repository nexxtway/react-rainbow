Basic example:

    const styles = {
        height: 565,
        width: 400,
        margin: 'auto',
    };
    const center = { lat: -33.836538, lng: 151.127900 };

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <div className="rainbow-p-top_x-large rainbow-p-bottom_x-large" style={styles}>
            <GoogleMap apiKey="AIzaSyCEDLRYSNn3mI1AwFjz-kYJ5ZIqmMyhphg" zoom={10} center={center} header="Title">
                <GoogleMapMarker position={{ lat: -33.941264, lng: 151.2042969 }} />
                <GoogleMapMarker position={{ lat: -33.940004, lng: 151.094593 }} />
                <GoogleMapMarker position={{ lat: -33.758782, lng: 151.048745 }} />
            </GoogleMap>
        </div>
    </div>
