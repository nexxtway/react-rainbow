import React from 'react';
import DesignDetails from './../../components/DesignDetails';
import './styles.css';

export default function RainbowComponents() {
    return (
        <DesignDetails
            category="library"
            title="Rainbow Components"
            description="Rainbow Components is a customizable and very easy to use library with more than 40 fully tested components."
            viewsAmount="20"
            downloadsAmount="333"
            imageSrc="/images/designsImages/rainbow-components.png"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow-admin.appspot.com/o/rainbow-components-library.sketch?alt=media&token=ba00be00-2cc1-4998-b8d7-c6c2cdbe24ef"
            previewUrl="/images/designsImages/rainbow-components.png">

            <h2 className="react-rainbow-rainbow-components_subtitle">
                How to begin using this library?
            </h2>
            <p className="react-rainbow-rainbow-components_description">
                Start using the Rainbow Components is simple. There are two ways:
            </p>
            <ol className="react-rainbow-rainbow-components_list">
                <li className="react-rainbow-rainbow-components_list-element">
                    Download the file, save in your local computer and follow the instructions in the file's Instructions section.
                </li>
                <li className="react-rainbow-rainbow-components_list-element">
                    Add the Sketch document from Sketch Cloud as a Shared Library.
                </li>
                <a
                    href="https://sketch.cloud/s/14L3p"
                    rel="noopener noreferrer"
                    target="_blank">
                    https://sketch.cloud/s/14L3p
                </a>
            </ol>
        </DesignDetails>
    );
}
