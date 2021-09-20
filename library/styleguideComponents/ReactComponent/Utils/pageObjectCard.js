/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../../../src/components/Card';
import PageObjectImage from './pageObjectImage';
import TutorialImage from './tutorialImage';
import FlaskIcon from './flaskIcon';
import GraduationCapIcon from './graduationCapIcon';

function getTypeText(type) {
    if (type === 'page-object') {
        return 'Page Object';
    }
    return 'Page Object Tutorial';
}

const FooterIcon = props => {
    const { type } = props;
    if (type === 'page-object') {
        return <FlaskIcon />;
    }
    return <GraduationCapIcon />;
};

const Image = props => {
    const { type } = props;
    if (type === 'page-object') {
        return <PageObjectImage />;
    }
    return <TutorialImage />;
};

export default function PageObjectCard({ results }) {
    return results.map(({ data, type, id }) => (
        <a
            key={id}
            href={data.url.url}
            className="react-rainbow-utils_link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card
                className="react-rainbow-utils-item_page-object"
                footer={
                    <div className="react-rainbow-utils-item_page-object-content">
                        <FooterIcon type={type} />
                        <p className="react-rainbow-utils-item_header">{`${
                            data.name[0].text
                        } ${getTypeText(type)}`}</p>
                    </div>
                }
            >
                <div className="react-rainbow-utils-item_img-container">
                    <Image type={type} />
                </div>
            </Card>
        </a>
    ));
}
