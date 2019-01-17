import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function Authentication() {
    return (
        <DesignDetails
            category="websites"
            title="Rainbow Authentication"
            viewsAmount="20"
            donwloadsAmount="333"
            imageSrc="/images/designsImages/authentication.png"
            previewUrl="/images/designsImages/authentication.png"
            liveUrl="https://react-rainbow-firebase-auth.firebaseapp.com/home/signin"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow-admin.appspot.com/o/rainbow-authentication.sketch?alt=media&token=fff0b5e0-b5ac-4d02-b529-a1fa39bac3d5"
            description="A minimum Rainbow example combines colors that are easy on the eye. Can be used to authenticate any website.
            Super easy to custom everything in the layouts, you will be free to mixing the elements and components to create your own design with your Business.  " />
    );
}
