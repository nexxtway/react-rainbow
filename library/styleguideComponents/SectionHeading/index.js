/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import Badge from '../../../src/components/Badge';
import ProjectSelector from '../ProjectSelector';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge className="react-rainbow-github-badge rainbow-color_dark-1 rainbow-m-right_large" variant="lightest">
        <FontAwesomeIcon color="#061c3f" icon={faStar} pull="left" />
        {stars}
    </Badge>
));

export default function SectionHeading() {
    return (
        <header className="react-rainbow-heading-container rainbow-align-content_space-between rainbow-position_fixed">
            <div>
                <ProjectSelector />
            </div>
            <div className="rainbow-align-content_center react-rainbow-github-badge-container">
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
