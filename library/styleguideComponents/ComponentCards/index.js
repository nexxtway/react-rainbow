import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../src/components/Card';
import './styles.css';

export default function ComponentCard({ results }) {
    return results.map(({ data, id }) => {
        return (
            <a
                key={id}
                className="react-rainbow-components-page_card-container"
                href={data['component-link'].url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Card
                    className="react-rainbow-components-page_card"
                    footer={data['component-name'][0].text}
                >
                    <img
                        src={data['component-image'].url}
                        alt={data['component-image'].url}
                        className="react-rainbow-experience-example-cards_example-img"
                    />
                </Card>
            </a>
        );
    });
}

ComponentCard.propTypes = {
    results: PropTypes.array,
};

ComponentCard.defaultProps = {
    results: [],
};
