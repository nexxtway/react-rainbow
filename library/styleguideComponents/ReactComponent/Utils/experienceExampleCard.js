import React from 'react';
import Card from '../../../../src/components/Card';
import githubLogo from './image/github.svg';
import './styles.css';

export default function ExperienceExampleCard({ results }) {
    return results.map(({ data, id }) => (
        <div>
            <div className="react-rainbow-utils-text">
                <h1 className="react-rainbow-utils-text_header">Real experience examples</h1>
                <p className="react-rainbow-utils-text-description">
                    The Real experience examples will help you get
                    started building your app using the Button Component.
                </p>
            </div>
            <a href={data['example-url'].url} className="react-rainbow-utils-link">
                <Card
                    className="react-rainbow-utils-item"
                    key={id}
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
                        <img src={data.image.url} alt="" />
                    </div>
                </Card>
            </a>
        </div>
    ));
}
