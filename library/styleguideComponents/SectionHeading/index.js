/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import Badge from '../../../src/components/Badge';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge className="react-rainbow-github-badge rainbow-color_dark-1 rainbow-m-right_small" variant="lightest">
        <FontAwesomeIcon className="react-rainbow-github-badge_icon" color="#061c3f" icon={faStar} />
        {stars}
    </Badge>
));

export default function SectionHeading() {
    return (
        <header className="react-rainbow-heading-container rainbow-flex rainbow-justify_end rainbow-align_center rainbow-position_fixed">
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
