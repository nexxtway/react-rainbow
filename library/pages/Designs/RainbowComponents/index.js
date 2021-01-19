import React from 'react';
import DesignDetails from '../../components/DesignDetails';
import './styles.css';

export default function RainbowComponents() {
    return (
        <DesignDetails
            category="library"
            title="Rainbow Components"
            description="Rainbow Components is a customizable and very easy to use library with more than 40 fully tested components."
            imageSrc="/images/designsImages/rainbow-components.png"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow.appspot.com/o/sketch%20designs%2Frainbow-components-library.sketch?alt=media&token=8b80cbe9-bad0-4fa4-91f6-eb5553cf3223"
            previewUrl="/images/designsImages/rainbow-components.png"
        >
            <h2 className="react-rainbow-rainbow-components_subtitle">
                How to begin using this library?
            </h2>
            <p className="react-rainbow-rainbow-components_description">
                Start using the Rainbow Components is simple. There are two ways:
            </p>
            <ol className="react-rainbow-rainbow-components_list">
                <li className="react-rainbow-rainbow-components_list-element">
                    Download the file, save in your local computer and follow the instructions in
                    the file's Instructions section.
                </li>
                <li className="react-rainbow-rainbow-components_list-element">
                    Add the Sketch document from Sketch Cloud as a Shared Library.
                </li>
                <a href="https://sketch.cloud/s/14L3p" rel="noopener noreferrer" target="_blank">
                    https://www.sketch.com/s/72677939-04a3-4ed3-bc2b-d89fa8ca2680
                </a>
            </ol>
        </DesignDetails>
    );
}
