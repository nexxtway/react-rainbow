import React from 'react';
import Card from '../../../../src/components/Card';
import GithubIcon from './githubIcon';

export default function ExperienceExampleCard({ results }) {
    return results.map(({ data, id }) => (
        <section key={id} className="react-rainbow-utils-item_example-container">
            <a
                className="react-rainbow-utils_example-link"
                href={data['example-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <Card
                    className="react-rainbow-utils-item"
                    footer={(
                        <div className="react-rainbow-utils-item_content">
                            <p className="react-rainbow-utils-item_example-header" >{data.title[0].text}</p>
                            <p className="react-rainbow-utils-item_description">{data.description[0].text}</p>
                        </div>
                    )}>
                    <div className="react-rainbow-utils-item_example-img-container">
                        <img
                            className="react-rainbow-utils-item_example-img"
                            src={data.image.url}
                            alt={data.title[0].text} />
                    </div>
                </Card>
            </a>
            <a
                className="react-rainbow-utils-item_github-link"
                href={data['github-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <GithubIcon />
            </a>
        </section>
    ));
}
