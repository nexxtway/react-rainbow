import getBase64Image from './getBase64Image';

export default function createMarkers({ objects, googleMap, center }) {
    const markersCopy = [];
    objects.forEach(marker => {
        const heading = marker.heading ? marker.heading : 0;

        const markerOptions = {
            position: marker.position,
            map: googleMap,
            zIndex: Math.round(marker.position.lat * 100000),
        };

        let promImage = null;
        if (marker.image) {
            promImage = new Promise(async (resolve, reject) => {
                try {
                    const base64Image = await getBase64Image(marker.image, heading);
                    markerOptions.icon = base64Image;
                    resolve(true);
                } catch (error) {
                    reject(`Error creating new image. Details: ${error}`);
                }
            });
        } else {
            promImage = new Promise(resolve => resolve(true));
        }

        promImage
            .then(() => {
                const markerMap = new window.google.maps.Marker(markerOptions);
                markersCopy.push(markerMap);

                if (center === 'auto') {
                    const bounds = new window.google.maps.LatLngBounds();
                    markersCopy.forEach(markerObj => bounds.extend(markerObj.getPosition()));
                    googleMap.setCenter(bounds.getCenter());
                    googleMap.fitBounds(bounds);
                }
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(`Error. Details: ${error}`);
            });
    });
}
