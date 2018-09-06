/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import Badge from '../../../src/components/Badge';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge className="react-rainbow_github-badge rainbow-color_dark-1 rainbow-m-right_medium" variant="lightest">
        <FontAwesomeIcon color="#061c3f" icon={faStar} pull="left" />
        {stars}
    </Badge>
));

function resolveTitle(title) {
    if (title === 'Getting Started') {
        return 'Overview';
    }
    return title;
}

export default function SectionHeading({ children }) {
    return (
            <header className="react-rainbow_heading-container rainbow-align-content_space-between rainbow-position_fixed">
                <h1 className="react-rainbow_title-text rainbow-color_dark-1 rainbow-font-size-heading_large">
                    {resolveTitle(children)}
                </h1>
                <div className="rainbow-align-content_center react-rainbow_github-badge_container">
                    <div>
                        <GithubStarsBadge />
                    </div>
                    <a
                        href="https://github.com/reiniergs/react-rainbow"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={githublogo} alt="github logo" />
                    </a>
                </div>
            </header>
    );
}

SectionHeading.propTypes = {
    children: PropTypes.string.isRequired,
};
