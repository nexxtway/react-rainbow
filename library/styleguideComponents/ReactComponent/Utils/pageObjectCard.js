import React from 'react';
import Card from '../../../../src/components/Card';
import PageObjectImage from './pageObjectImage';
import TutorialImage from './tutorialImage';
import FlaskIcon from './flaskIcon';
import GraduationCapIcon from './graduationCapIcon';

export default function PageObjectCard({ results, type }) {
    const getTypeText = () => {
        if (type === 'page-object') {
            return 'Page Object';
        }
        return 'Tutorial';
    };

    const FooterIcon = () => {
        if (type === 'page-object') {
            return <FlaskIcon />;
        }
        return <GraduationCapIcon />;
    };

    const Image = () => {
        if (type === 'page-object') {
            return <PageObjectImage />;
        }
        return <TutorialImage />;
    };

    return results.map(({ data, id }) => (
        <a
            key={id}
            href={data.url.url}
            className="react-rainbow-utils-link"
            target="_blank"
            rel="noopener noreferrer">
            <Card
                className="react-rainbow-utils-item"
                footer={(
                    <div className="react-rainbow-utils-item-page-object_content">
                        <FooterIcon />
                        <p className="react-rainbow-utils-item_header" >{`Go to ${data.name[0].text} ${getTypeText()}`}</p>
                    </div>
                )}>
                <div className="react-rainbow-utils-item_img-container">
                    <Image />
                </div>
            </Card>
        </a>
    ));
}
