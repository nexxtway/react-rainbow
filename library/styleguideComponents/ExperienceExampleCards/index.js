import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../src/components/Card';
import RenderIf from '../../../src/components/RenderIf';
import GithubIcon from './githubIcon';
import './styles.css';

export default function ExperienceExampleCards({ results }) {
    return results.map(({ data, id }) => (
        <section key={id} className="react-rainbow-experience-example-cards_example-container">
            <a
                className="react-rainbow-experience-example-cards_example-link"
                href={data['example-url'].url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Card
                    className="react-rainbow-experience-example-cards"
                    footer={
                        <div className="react-rainbow-experience-example-cards_content">
                            <p className="react-rainbow-experience-example-cards_example-header">
                                {data.title[0].text}
                            </p>
                            <p className="react-rainbow-experience-example-cards_description">
                                {data.description[0].text}
                            </p>
                        </div>
                    }
                >
                    <div className="react-rainbow-experience-example-cards_example-img-container">
                        <img
                            className="react-rainbow-experience-example-cards_example-img"
                            src={data.image.url}
                            alt={data.title[0].text}
                        />
                    </div>
                </Card>
            </a>
            <RenderIf isTrue={data['github-url'].url}>
                <a
                    className="react-rainbow-experience-example-cards_github-link"
                    href={data['github-url'].url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon />
                </a>
            </RenderIf>
        </section>
    ));
}

ExperienceExampleCards.propTypes = {
    results: PropTypes.array,
};

ExperienceExampleCards.defaultProps = {
    results: [],
};
