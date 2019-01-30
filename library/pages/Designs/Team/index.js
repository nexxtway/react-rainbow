import React from 'react';
import DesignDetails from './../../components/DesignDetails';

export default function Team() {
    return (
        <DesignDetails
            category="websites"
            title="Rainbow Team"
            viewsAmount="20"
            downloadsAmount="333"
            imageSrc="/images/designsImages/team.png"
            previewUrl="/images/designsImages/team.png"
            sketchUrl="https://firebasestorage.googleapis.com/v0/b/react-rainbow-admin.appspot.com/o/rainbow-team.sketch?alt=media&token=ce866b8b-52e0-407a-8944-ef9493304d12"
            description="Rainbow Team is one of the elements that can be used inside a project. We are curious to see how you want to use it and also improve it, so let us know any feedback you have." />
    );
}
