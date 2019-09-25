import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function Chat() {
    return (
        <DesignDetails
            category="websites"
            title="Rainbow Chat"
            viewsAmount="20"
            downloadsAmount="333"
            imageSrc="/images/designsImages/chat.png"
            previewUrl="/images/designsImages/chat.png"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow.appspot.com/o/sketch%20designs%2Frainbow-chat.sketch?alt=media&token=234021b6-6b1e-41e6-9748-32adeb1df669"
            description="Rainbow Chat are designed to look great following the Rainbow design pattern. The idea is creating beautiful, playful design. It feels light, fresh and easy to go through."
        >
            <p className="react-rainbow-rainbow-components_description">
                We are curious to see how you want to use it and also improve it, so let us know any
                feedback you have.
            </p>
        </DesignDetails>
    );
}
