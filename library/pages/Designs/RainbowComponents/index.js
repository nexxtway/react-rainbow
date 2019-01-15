import React from 'react';
import DesignDetails from './../../components/DesignDetails';
import './styles.css';

export default function RainbowComponents() {
    return (
        <DesignDetails
            category="library"
            title="Rainbow Components"
            description="Rainbow Components is a library very easy to use and customizable with more than 40 components."
            viewsAmount="20"
            donwloadsAmount="333"
            imageSrc="images/designsImages/rainbow-components.png"
            previewUrl="https://react-rainbow.firebaseapp.com/images/designsImages/rainbow-components.png"
            sketchUrl="hfhf">

            <h2 className="react-rainbow-rainbow-components_subtitle">
                How begin to use this library?
            </h2>
            <p className="react-rainbow-rainbow-components_description">
                Begin to use Rainbow Component is simple. You can do it in two different ways:
            </p>
            <ol className="react-rainbow-rainbow-components_list">
                <li className="react-rainbow-rainbow-components_list-element">
                    Donwload the file, save in your local computer and follow the instructions in the Instruction section of the file.
                </li>
                <li className="react-rainbow-rainbow-components_list-element">
                    Add the Sketch document from Sketch Cloud as a Shared Library
                    <a
                        className="rainbow-p-horizontal_x-small"
                        href="https://sketch.cloud/s/14L3p"
                        rel="noopener noreferrer"
                        target="_blank">
                        https://sketch.cloud/s/14L3p
                    </a>
                </li>
            </ol>
        </DesignDetails>
    );
}
