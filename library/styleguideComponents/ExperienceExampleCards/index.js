import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../src/components/Card';
import GithubIcon from './githubIcon';
import './styles.css';

export default function ExperienceExampleCards({ results }) {
    return results.map(({ data, id }) => (
        <section key={id} className="react-rainbow-experience-example-card_example-container">
            <a
                className="react-rainbow-experience-example-card_example-link"
                href={data['example-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <Card
                    className="react-rainbow-experience-example-card"
                    footer={(
                        <div className="react-rainbow-experience-example-card_content">
                            <p className="react-rainbow-experience-example-card_example-header" >{data.title[0].text}</p>
                            <p className="react-rainbow-experience-example-card_description">{data.description[0].text}</p>
                        </div>
                    )}>
                    <div className="react-rainbow-experience-example-card_example-img-container">
                        <img
                            className="react-rainbow-experience-example-card_example-img"
                            src={data.image.url}
                            alt={data.title[0].text} />
                    </div>
                </Card>
            </a>
            <a
                className="react-rainbow-experience-example-card_github-link"
                href={data['github-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <GithubIcon />
            </a>
        </section>
    ));
}

ExperienceExampleCards.propTypes = {
    results: PropTypes.array,
};

ExperienceExampleCards.defaultProps = {
    results: [],
};
