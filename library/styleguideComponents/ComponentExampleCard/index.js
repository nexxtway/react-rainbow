import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../src/components/Card';
import GithubIcon from './githubIcon';
import './styles.css';

export default function ComponentExampleCard({ results }) {
    return results.map(({ data, id }) => (
        <section key={id} className="react-rainbow-component-example-card-item_example-container">
            <a
                className="react-rainbow-component-example-card_example-link"
                href={data['example-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <Card
                    className="react-rainbow-component-example-card-item"
                    footer={(
                        <div className="react-rainbow-component-example-card-item_content">
                            <p className="react-rainbow-component-example-card-item_example-header" >{data.title[0].text}</p>
                            <p className="react-rainbow-component-example-card-item_description">{data.description[0].text}</p>
                        </div>
                    )}>
                    <div className="react-rainbow-component-example-card-item_example-img-container">
                        <img
                            className="react-rainbow-component-example-card-item_example-img"
                            src={data.image.url}
                            alt={data.title[0].text} />
                    </div>
                </Card>
            </a>
            <a
                className="react-rainbow-component-example-card-item_github-link"
                href={data['github-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <GithubIcon />
            </a>
        </section>
    ));
}

ComponentExampleCard.propTypes = {
    results: PropTypes.array.isRequired,
};
