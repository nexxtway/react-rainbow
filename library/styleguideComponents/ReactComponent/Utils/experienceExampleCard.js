import React from 'react';
import Card from '../../../../src/components/Card';
import githubLogo from './image/github.svg';

export default function ExperienceExampleCard({ results }) {
    return results.map(({ data, id }) => (
        <a key={id} href={data['example-url'].url} className="react-rainbow-utils-link">
            <Card
                className="react-rainbow-utils-item"
                actions={(
                    <a href={data['github-url'].url}>
                        <img src={githubLogo} alt="github logo" />
                    </a>
                )}
                footer={(
                    <div className="react-rainbow-utils-item_content">
                        <p className="react-rainbow-utils-item-example_header" >{data.title[0].text}</p>
                        <p className="react-rainbow-utils-item_description">{data.description[0].text}</p>
                    </div>
                )}>
                <div className="react-rainbow-utils-item_img-container">
                    <img src={data.image.url} alt={data.title[0].text} />
                </div>
            </Card>
        </a>
    ));
}
