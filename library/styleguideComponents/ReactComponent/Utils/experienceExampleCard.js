import React from 'react';
import Card from '../../../../src/components/Card';
import ButtonIcon from '../../../../src/components/ButtonIcon';
import GithubIcon from './githubIcon';

export default function ExperienceExampleCard({ results }) {
    return results.map(({ data, id }) => (
        <a
            key={id}
            href={data['example-url'].url}
            className="react-rainbow-utils-link"
            target="_blank"
            rel="noopener noreferrer">

            <Card
                className="react-rainbow-utils-item"
                actions={(
                    <ButtonIcon
                        href={data['github-url'].url}
                        target="_blank"
                        size="large"
                        assistiveText="github logo"
                        icon={<GithubIcon />} />
                )}
                footer={(
                    <div className="react-rainbow-utils-item_content">
                        <p className="react-rainbow-utils-item-example_header" >{data.title[0].text}</p>
                        <p className="react-rainbow-utils-item_description">{data.description[0].text}</p>
                    </div>
                )}>
                <div className="react-rainbow-utils-item_example-img-container">
                    <img src={data.image.url} alt={data.title[0].text} />
                </div>
            </Card>
        </a>
    ));
}
