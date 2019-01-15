import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function Administration() {
    return (
        <DesignDetails
            category="websites"
            title="Rainbow Administration"
            viewsAmount="20"
            donwloadsAmount="333"
            imageSrc="images/designsImages/admin.png"
            liveUrl="https://react-rainbow-admin.firebaseapp.com/dashboard"
            previewUrl="https://react-rainbow.firebaseapp.com/images/designsImages/admin.png"
            sketchUrl="hfhf"
            description="If you are looking for a tool to manage and visualise data about your business, it is the thing for you. We made it our priority to not add things that you don't need,
             so the Rainbow Administration comes with just enough features for you to easily use.">

            <p className="react-rainbow-rainbow-components_description">
              It combines multiple components and features numerous example of how it can be used. You will also find multiple example pages to get you started or provide inspiration.
              We have needed components, and we have created multiple examples pages. We are curious to see how you want to use it and also improve it, so let us know any feedback you have.
            </p>
        </DesignDetails>
    );
}
