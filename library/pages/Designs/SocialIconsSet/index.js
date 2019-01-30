import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function SocialIconsSet() {
    return (
        <DesignDetails
            category="library"
            title="Rainbow Social Icons"
            description="Rainbow Social Icons Set is a library with a variety of social icons and social login buttons. We are curious to see how you want to use it and also improve it, so let us know any feedback you have."
            viewsAmount="20"
            downloadsAmount="333"
            imageSrc="/images/designsImages/social.png"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow-admin.appspot.com/o/rainbow-social-elements.sketch?alt=media&token=2a0e038a-c5c3-490c-8d66-1cd55cb5b774"
            previewUrl="/images/designsImages/social.png">

            <h2 className="react-rainbow-rainbow-components_subtitle">
                How to begin using this library?
            </h2>
            <p className="react-rainbow-rainbow-components_description">
                Start using the Rainbow Social Icons set is simple. There are two ways:
            </p>
            <ol className="react-rainbow-rainbow-components_list">
                <li className="react-rainbow-rainbow-components_list-element">
                    Download the file, save in your local computer and follow the instructions in the file's Instructions section.
                </li>
                <li className="react-rainbow-rainbow-components_list-element">
                    Add the Sketch document from Sketch Cloud as a Shared Library.
                </li>
                <a
                    href="https://sketch.cloud/s/mEdbz"
                    rel="noopener noreferrer"
                    target="_blank">
                    https://sketch.cloud/s/mEdbz
                </a>
            </ol>
        </DesignDetails>
    );
}
