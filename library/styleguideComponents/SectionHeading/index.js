/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import Badge from '../../../src/components/Badge';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge
        iconName="utility:favorite"
        label={stars}
        className="slds-react-github-badge"
        variant="lightest" />
));

export default function SectionHeading({ children }) {
    return (
            <header className="slds-border_bottom slds-p-bottom_large slds-grid slds-grid_align-spread">
                <h1 className="slds-text-heading_large slds-react-component-title-text">
                    {children}
                </h1>
                <div className="slds-grid slds-grid_vertical-align-center">
                    <div>
                        <GithubStarsBadge />
                    </div>
                    <a
                        href="https://github.com/reiniergs/react-lightning-components"
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
