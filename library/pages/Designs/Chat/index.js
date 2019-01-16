import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function Chat() {
    return (
        <DesignDetails
            category="websites"
            title="Rainbow Chat"
            viewsAmount="20"
            donwloadsAmount="333"
            imageSrc="images/designsImages/chat.png"
            previewUrl="https://react-rainbow.firebaseapp.com/images/designsImages/chat.png"
            sketchUrl="hfhf"
            description="Rainbow Chat are designed to look great following the Rainbow design pattern. The idea is creating beautiful, playful design. It feels light, fresh and easy to go through.">

            <p className="react-rainbow-rainbow-components_description">
                We are curious to see how you want to use it and also improve it, so let us know any feedback you have.
            </p>
        </DesignDetails>
    );
}
